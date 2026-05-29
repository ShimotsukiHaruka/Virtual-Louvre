// English comments strictly enforced for codebase longevity and clear system architecture.
const fs = require('fs');
const path = require('path');
const gltfPipeline = require('gltf-pipeline');
const processGltf = gltfPipeline.processGltf;

// Define directory targets
const sculptureDir = path.join(__dirname, 'sculpture');

/**
 * Recursively scans folders to identify and compress .gltf files into optimized .glb assets
 */
function scanAndOptimize(dirPath) {
    if (!fs.existsSync(dirPath)) return;

    const files = fs.readdirSync(dirPath);

    files.forEach((file) => {
        const fullPath = path.join(dirPath, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            // Recursive scan deep into leaves
            scanAndOptimize(fullPath);
        } else if (path.extname(file).toLowerCase() === '.gltf') {
            const dirOfFile = path.dirname(fullPath);
            const binFile = file.replace('.gltf', '.bin');
            const binPath = path.join(dirOfFile, binFile);

            // Check if corresponding .bin file exceeds Cloudflare 25 MiB threshold
            if (fs.existsSync(binPath)) {
                const binSizeMb = fs.statSync(binPath).size / (1024 * 1024);
                
                if (binSizeMb > 20) { // Safety margin threshold set at 20 MiB
                    console.log(`\n[Target Found] Found heavy asset at: ${fullPath} (${binSizeMb.toFixed(2)} MiB)`);
                    console.log(`Starting conversion to single compressed .glb file...`);

                    const gltf = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
                    const options = {
                        resourceDirectory: dirOfFile,
                        binary: true // Enforce compilation to .glb format
                    };

                    // Execute memory stream conversion
                    processGltf(gltf, options)
                        .then(function(results) {
                            const outputGlbPath = fullPath.replace('.gltf', '.glb');
                            fs.writeFileSync(outputGlbPath, results.glb);
                            console.log(`[Success] Optimized asset saved to: ${outputGlbPath}`);

                            // Wipe out heavy redundant files to unblock Git trackers
                            fs.unlinkSync(fullPath);
                            fs.unlinkSync(binPath);
                            console.log(`[Clean] Extracted original .gltf and .bin tracking nodes cleared.`);
                        })
                        .catch(function(error) {
                            console.error(`[Error] Failed to process asset ${file}:`, error);
                        });
                }
            }
        }
    });
}

console.log("Initializing Automated Sculpture Asset Optimization Pipeline...");
scanAndOptimize(sculptureDir);
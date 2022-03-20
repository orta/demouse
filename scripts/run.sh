yarn esbuild src/*.ts --outdir=dist
ninja -C builddir/ install
chmod +x builddir/io.orta.demouse 
./builddir/io.orta.demouse
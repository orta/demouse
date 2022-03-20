yarn esbuild src/*.ts --outdir=dist --log-level=error
ninja  -C builddir/ install

chmod +x builddir/io.orta.demouse 
./builddir/io.orta.demouse
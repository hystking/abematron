SRC=abematron.png
DIST=abematron.iconset

rm -rf $DIST
mkdir $DIST

convert $SRC -sample 1024x1024 $DIST/icon_512x512@2x.png
convert $SRC -sample 512x512 $DIST/icon_512x512.png
convert $SRC -sample 512x512 $DIST/icon_256x256@2x.png
convert $SRC -sample 256x256 $DIST/icon_256x256.png
convert $SRC -sample 256x256 $DIST/icon_128x128@2x.png
convert $SRC -sample 128x128 $DIST/icon_128x128.png
convert $SRC -sample 64x64 $DIST/icon_32x32@2x.png
convert $SRC -sample 32x32 $DIST/icon_32x32.png
convert $SRC -sample 32x32 $DIST/icon_16x16@2x.png
convert $SRC -sample 16x16 $DIST/icon_16x16.png

iconutil -c icns $DIST

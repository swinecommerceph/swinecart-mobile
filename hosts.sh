rm hosts
adb root
adb remount
adb pull /system/etc/hosts hosts
echo "10.0.2.2\tswinecart.test\n" >> hosts
adb push hosts /system/etcs/hosts

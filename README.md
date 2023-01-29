# PT Cita Rasa Mendunia - Technical Test Algorithm

1. Terdapat sebuah bilangan 1.543.781 (satu juta lima ratus empat puluh tiga ribu tujuh ratus delapan puluh satu). Buatlah alur program yang memberikan output sebagai berikut:

```
1000000
500000
40000
3000
700
80
1
```

2. Buatlah alur program yang menghasilkan output sebagai berikut:

```
    O
  O O O
O O O O O
  O O O
    O
```

3. Buatlah alur program yang menghasilkan output sebagai berikut:

```
X X X X X X X
X X X X X X
X X X X X
X X X X
X X X
X X
X
```

4. Tuliskan output dari kode pemrograman di bawah ini:

```php
$arr = [6,7,3,1,4,9,23,10];
$n = sizeof($arr);

for($i = 0; $i < $n - 1; $i++)
    for ($j = 0; $j < $n - $i - 1; $j++)
     {
         if ($arr[$j] > $arr[$j+1])
            $t = $arr[$j];
            $arr[$j] = $arr[$j+1];
            $arr[$j+1] = $t;
     }
for ($i = 0; $i < count($arr); $i++)
    echo $arr[$i]." ";
```

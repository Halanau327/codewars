function findOdd(arr) {
    const counts = {}
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (counts[num] === undefined) {
            counts[num] = 1;
        } else {
            counts[num]++;
        }
    }
    for (const key in counts) {
        if (counts[key] % 2 !== 0) {
            return Number(key)
        }
    }
}

// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]))
//i=0; counts[arr[i]] = counts[1] = 1
//i=1; counts[arr[i]] = counts[2] = 1
//i=2; counts[arr[i]] = counts[2] = 2
//i=3; counts[arr[i]] = counts[3] = 1
//i=4; counts[arr[i]] = counts[3] = 2
//i=5; counts[arr[i]] = counts[3] = 3
//i=6; counts[arr[i]] = counts[4] = 1
//i=7; counts[arr[i]] = counts[3] = 4
//i=8; counts[arr[i]] = counts[3] = 5
//i=9; counts[arr[i]] = counts[3] = 6
//i=10; counts[arr[i]] = counts[2] = 3
//i=11; counts[arr[i]] = counts[2] = 4
//i=12; counts[arr[i]] = counts[1] = 2
//counts: ["1": 2, "2": 4, "3": 6, "4": 1]


// REDUCE const sum = nums.reduce(function (acc - накапливающийся, curr - текущий элемент массива) { return acc + curr }, 0);
// SPLIT - str.split(",") = "Hello,World,JavaScript" => ["Hello", "World", "JavaScript"]
// JOIN - возвращает представление массива в виде строки, разделённых запятой или другим указанным разделителем.
// SLICE - animals.slice(2) - вернет новый массив со 2го эл-та включительно; months.slice(2, 5) - вернет новый с 2 по 4 (5 не включаем)
// SPLICE - tasks.splice(1, 2) - удалить 2 элемента начиная с 1-го индекса (мутирует)
// FILTER const jLanguages = languages.filter(l=>l.startsWith("J")) - отфильтровали массив с первой "J"
// FIND const first5 = products.find((element) => element === 5) - находит первое вхождение и возвращает его
// INCLUDES - Для массивов: проверяет, есть ли искомый элемент в массиве; Для строк: проверяет, есть ли искомая подстрока в строке.
// POP - const days = ['пн', 'вт', 'ср', 'чт'] const lastItem = days.pop() - удаляет из массива последний элемент и возвращае его значение
// SHIFT - удаляет из массива элемент с индексом 0 и возвращает значение удалённого элемента.
// UNSHIFT - добавляет один или несколько новых элементов в начало массива и возвращает длину массива с учётом добавленных элементов.
// CONCAT - const newArr = strings.concat(numbers) - объединяет массивы и возвращает новый
// FOREACH - необходимо совершить одну и ту же операцию над всеми элементами массива
// MAP - myArray.map(item => item * 2).sort((a, b) => a - b) - [0, 2, 4, 6, 8, 14, 16]
// new Set() - add() — добавить элемент, delete() — удалить элемент, has() — проверить, есть ли элемент в коллекции, clear() — очистить коллекцию.
// new Map() - коллекция для хранения данных любого типа в виде пар [ключ, значение]
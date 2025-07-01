function humanReadable(fullSeconds) {
    if (fullSeconds <= 0) {
        return `00:00:00`
    }
    let hours = Math.floor(fullSeconds / 3600)
    const minutesAfterHours = fullSeconds % 3600
    let minutes = Math.floor(minutesAfterHours / 60)
    let seconds = minutesAfterHours % 60

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${hours}:${minutes}:${seconds}`
}

console.log(humanReadable(59))

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
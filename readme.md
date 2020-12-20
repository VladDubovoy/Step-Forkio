Состав проекта:

1. Влад Дубовой
2. Алексей Майборода

Список использованных технологий:

1. сборка gulp 4 и его модули
2. sass препроцессор
3. Адаптивная верстка
4. Javascript
5. Git

Задание для Vlad Dubovoy

-Сверстать шапку сайта с верхним меню (включая выпадающее меню при малом разрешении экрана).
-Сверстать секцию People Are Talking About Fork.

Задание для Alex Maiboroda

-Сверстать блок Revolutionary Editor. Кнопки watch/star/fork на макете сделаны одним слоем, поэтому с макета не получится скачать иконки. Сами кнопки надо сделать, чтобы выглядели как здесь справа вверху (оттуда же с помощью инспектора можно взять все SVG иконки и скачать используемые на гитхабе стили).
-Светстать секцию Here is what you get.
-Сверстать секцию Fork Subscription Pricing. В блоке с прайсингом третий элемент всегда будет "выделен" и будет больше других (то есть не по клику/ховеру, а статически).

<!-- Все классы по БЭМ -->

class="block" class="block**element class="block**element--modificator"
разделение слов через 1 дефиз "-" пример <main class="main-content"><main>

<!-- Adaptive -->

mobile-first 320-480px, 481-768px, 993-1200px

<!-- Git команды -->
<!-- Создание ветки -->

Git branch branchName
Git checkout branchName

Or

Git checkout -b branchName

<!-- Проверка ветки -->

Git status

<!-- Добавление изменений -->

Git add .
Git commit -m «init commit»
git push --set-upstream origin vladdubovoy

<!-- (только первый раз в ветке, потом просто git push) -->

<!-- Соединение (merge) -->

Git checkout master
Git merge branchName
Git add .
Git commit -m «merge branchName»
Git push

<!-- Gulp команды в терминале-->

npm run dev

<!-- запуск сервера и отслеживание js, scss -->

npm run build

<!-- очистка dist, соединение html, css, js, минификация, сжимание картинок -->

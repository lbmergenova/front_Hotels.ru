# front_Hotels.ru

## <a id="title1">Git - Основы</a> 


- ### Конфигурация
   - Уровни конфигурации: локальный, глобальный и системный.
   ![Уровни конфигурации](https://www.example.com/image.jpg)
   - Команды для конфигурации Git.
``` bash
git config user.name "Laura"
git config user.email "example@gmail.com"
git config --global user.name "Laura"
git config --global user.email "example@gmail.com"
git config --list
git config --list --global
git config --unset user.name
git config --unset user.email
git config --remove-section user
```
   - Настройка редактора
``` bash
git config --global core.editor "code --wait"`
```
   - Алиасы для работы с Git в консоли
``` bash
git config alias.sayhi '!echo "hello"; echo "from git"'
git config alias.a '!git ...; git ...'
git config alias.commitall '!git add .; git commit'
```
   - Просмотр документации из консоли
``` bash
git config -h
git help config
```
---
- ### Основные команды Git

<pre>
    <li><b>clone</b>   клонирование репозитория в новый каталог
    <li><b>init</b>    создание пустого репозитория Git или переинициализация существующего
    <li><b>add</b>     добавление содержимого файла в индекс
    <li><b>mv</b>      перемещение или переименование файла, каталога или символьной ссылки
    <li><b>rm</b>      удаление файлов из рабочего каталога и индекса
    <li><b>log</b>     вывод истории коммитов
    <li><b>status</b>  вывод состояния рабочего каталога
    <li><b>commit</b>  запись изменений в репозиторий
    <li><b>pull</b>    извлечение изменений и объединение с другим репозиторием или локальной веткой
    <li><b>push</b>    обновление внешних ссылок и связанных объектов
</pre>


*Смотрите «git help <понятие>»
или «git help <термин>» чтобы узнать больше о конкретной подкоманде
или понятии.*

*Смотрите «git help git» для получения общего обзора системы.*

---

### Полезные ссылки

[Git: курс](https://www.youtube.com/playlist?list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb)

[Руководство по оформлению Markdown файлов](https://gist.github.com/Jekins/2bf2d0638163f1294637#some-title-1)

[Перейти к Git - Основы](#title1)

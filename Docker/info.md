*********************************************************************************************************
 
`Docker` - это платформа для разработки, доставки и запуска приложений в контейнерах. Он позволяет упаковывать приложения и их зависимости в единый контейнер, который может быть легко переносимым и запускаться на любой платформе, поддерживающей Docker.
 
Docker позволяет упростить процесс развертывания приложений, улучшить производительность и облегчить управление инфраструктурой. Он также позволяет эффективно использовать ресурсы хост-машины, т.к. контейнеры делят ядро операционной системы и используют меньше ресурсов по сравнению с виртуальными машинами.
 
*********************************************************************************************************
 
`Docker-образ` - это шаблон или макет для создания контейнера, который включает в себя приложение и все его зависимости, такие как библиотеки, код, переменные окружения и другие файлы, необходимые для его работы. Образ является статическим и неизменным по своей природе.
 
*********************************************************************************************************
 
`Docker-контейнер` - является экземпляром запущенного образа. Он представляет собой изолированную среду, в которой работает приложение вместе со всеми его зависимостями. Контейнеры могут быть созданы из образов и используются для выполнения приложений в изолированной среде.
 
Таким образом, контейнеры являются "запущенными" экземплярами образов, предоставляющими изолированную среду для приложений, в то время как образы представляют собой статические шаблоны, на основе которых создаются контейнеры.
 
*********************************************************************************************************
 
`Docker volumes` - это механизм в Docker, позволяет создавать и использовать постоянное хранилище для данных, которые могут быть доступны из контейнеров. Они используются для сохранения и управления данными внутри контейнера, и предоставляют удобный и надежный способ сохранения информации даже после остановки или удаления контейнера.
 
Docker volumes полезны, когда вам нужно сохранить данные, такие как файлы конфигурации, базы данных, журналы и другие постоянные данные, которые могут изменяться во время работы контейнера. Они также облегчают процесс резервного копирования и восстановления данных, а также обеспечивают удобный способ обмена данными между контейнерами.
 
Использование Docker volumes также позволяет изолировать данные от контейнера и делает их более устойчивыми к изменениям внутри контейнера.
 
docker volume ls – список томов.
docker volume create <volume_name> – создать том.
docker run -v <volume_name>:<path> – запуск контейнера с томом.
 
*********************************************************************************************************
 
`Dockerfile` - это текстовый файл, который содержит инструкции по созданию образа Docker. Он определяет все шаги, необходимые для создания образа, включая базовый образ, установку зависимостей, копирование файлов и настройку окружения. Dockerfile позволяет автоматизировать процесс создания образа, что облегчает развертывание и управление приложениями в контейнерах.
 
Dockerfile позволяет описать все необходимые шаги для создания образа одним файлом, что делает процесс воспроизведения образа прозрачным и удобным. Это также позволяет командам разработки и операций легко масштабировать и управлять приложениями в контейнерах.
 
Основные инструкции, которые могут быть использованы в Dockerfile:
FROM<image> – устанавливает базовый образ для дальнейших инструкций
WORKDIR <path> – устанавливает рабочую директорию для некоторых инструкций (COPY, CMD, RUN)
COPY <src> <dest> – копирует файлы в файловую систему контейнера
RUN <command> – выполняет указанные команды
CMD <command> – предоставляет параметры для запуска контейнера
EXPOSE <port> – указывает, на каком порту работает приложение внутри контейнера
 
*********************************************************************************************************
 
`docker build` - для создания Docker образа на основе Dockerfile.
 
Например:
docker build -t my_image_name:my_tag .
 
В этой команде:
"docker build" - указывает на то, что мы хотим создать образ.
"-t my_image_name:my_tag" - задает имя и тег для создаваемого образа.
"." - указывает на текущий каталог, в котором находится Dockerfile.
 
Эта команда прочитает Dockerfile из текущего каталога и выполнит все инструкции из файла, а затем создаст образ с указанным именем и тегом.
 
*********************************************************************************************************
 
`docker run` - для запуска контейнера Docker на основе образа.
 
Например:
docker run -p 8080:80 -v /host/directory:/container/directory my_image_name
 
В этой команде:
"docker run" указывает, что мы хотим запустить контейнер на основе указанного образа.
"-p 8080:80" задает проброс портов, где 8080 - порт на хосте, а 80 - порт в контейнере.
"-v /host/directory:/container/directory" создает привязку тома, где /host/directory - путь к папке на хосте, а /container/directory - путь к папке в контейнере.
"my_image_name" - это имя образа, на основе которого будет создан контейнер.
 
После выполнения этой команды Docker создаст новый контейнер на основе указанного образа, пробросит порты и привяжет указанные тома.
 
Также возможно указать дополнительные флаги и аргументы для настройки контейнера, например, "--name" для задания имени контейнера, "-d" для запуска в режиме демона и т.д.
 
*********************************************************************************************************
 
`docker ps` - для вывода всех Docker контейнеров. 
 
Однако, по умолчанию эта команда показывает только запущенные контейнеры. Если вы хотите увидеть все контейнеры, включая остановленные, используйте флаг *-a* или *--all*.
 
Например:
"docker ps" - покажет только запущенные контейнеры.
"docker ps -a" или "docker ps --all" - покажет все контейнеры (запущенные и остановленные).
 
*********************************************************************************************************
 
`docker images` - для вывода всех Docker образов, `docker image ls` - сокращенная версия вывода всех Docker образов.
 
*********************************************************************************************************
 
`Для остановки и удаления Docker контейнеров используются следующие команды:`
 
`docker stop <container>` – остановка запущенного контейнера, container это ID или имя контейнера, который нужно остановить.
`docker rm <container>` – удаление остановленного контейнера, container это ID или имя контейнера, который нужно удалить.
`docker rmi <container>` – удаления Docker образов, container это ID или имя образа, который нужно удалить.
 
docker stop $(docker ps -a -q) - остановит все контейнеры.
docker rm $(docker ps -a -q) - удалит все контейнеры.
docker rmi $(docker images -q) - удалит все образы.
 
*********************************************************************************************************
 
`Docker Hub` - это облачное хранилище для Docker-образов, которое предоставляет разработчикам и командам среду для хранения, обмена и управления различными Docker-образами. Он также предлагает механизм для автоматической сборки (automated builds) Docker-образов из исходного кода, а также возможности для управления учетными записями и доступом.
 
Зачем нужен Docker Hub:
1. Хранение образов: Docker Hub предоставляет облачное хранилище для Docker-образов, что позволяет пользователям безопасно хранить образы и иметь к ним доступ из любого места.
2. Обмен образами: Пользователи могут делиться своими образами с другими разработчиками и командами, что существенно упрощает процесс развертывания приложений.
3. Автоматическая сборка: Docker Hub позволяет настраивать автоматические сборки образов из исходного кода, что ускоряет процесс интеграции и развертывания изменений.
4. Централизованная учетная запись: Docker Hub обеспечивает механизм управления учетными записями, что позволяет разработчикам управлять своими образами и контейнерами в удобном личном пространстве.
 
*********************************************************************************************************
 
`docker pull` - для загрузки Docker образа из Docker Hub.
 
Например:
docker pull image_name.
"image_name" - это имя образа, который вы хотите загрузить. 
 
Например:
docker pull nginx.
Загрузит образ "nginx" из Docker Hub на вашу локальную машину.
 
*********************************************************************************************************
 
`Чтобы отправить свой Docker образ в Docker Hub, нужно выполнить следующие шаги:`
 
1. Аутентификация в Docker Hub: Выполните вход в свою учетную запись на Docker Hub, используя команду docker login`. Вам может потребоваться ввести учетные данные для доступа к вашей учетной записи на Docker Hub.
 
2. Переименование образа: Чтобы отправить образ в Docker Hub, нужно переименовать его в формат, который соответствует вашему имени пользователя на Docker Hub. Это делается с помощью команды *docker tag*.
 
Например:
docker tag local-image:tagname yourhubusername/imagename:tagname
 
В этой команде:
"local-image" - имя вашего локального образа.
"tagname" - тэг вашего локального образа.
"yourhubusername" - ваше имя пользователя на Docker Hub.
"imagename" - имя образа на Docker Hub, куда вы хотите его загрузить.
 
3. Отправка образа в Docker Hub: После переименования образа его можно отправить в Docker Hub с помощью команды *docker push*.
 
Например:
docker push yourhubusername/imagename
 
В этой команде: 
"yourhubusername/imagename" - это имя образа на Docker Hub, куда вы хотите его загрузить.
 
*********************************************************************************************************
 
`Docker Compose` - это инструмент для определения и запуска многоконтейнерных Docker приложений. С помощью Docker Compose можно использовать файл конфигурации в формате YAML для определения множества сервисов, их настроек, сетей и томов, а также запускать и управлять ими с помощью одной команды.
 
Вот некоторые из задач, которые решает Docker Compose:
 
1. Управление многоконтейнерными приложениями: Docker Compose позволяет вам определить и управлять несколькими контейнерами с помощью одного файла конфигурации.
 
2. Облегчение развертывания приложений: Docker Compose упрощает развертывание многоконтейнерных приложений, предоставляя простой способ запуска, остановки и удаления всего приложения целиком.
 
3. Совместное использование переменных среды и дополнительных опций: Docker Compose позволяет определять переменные среды и дополнительные опции для контейнеров в рамках одного конфигурационного файла.
 
4. Настройка сетевых связей между контейнерами: С помощью Docker Compose можно настраивать сетевые связи между разными контейнерами, устанавливая их зависимости и взаимодействие.
 
5. Управление томами данных: Docker Compose позволяет определять тома для сохранения данных, обеспечивая сохранность данных между перезапусками контейнеров.
 
В целом, Docker Compose упрощает управление и развертывание многоконтейнерных приложений, предоставляя удобный механизм для определения, запуска и управления Docker-приложениями в локальной среде или в продакшене.
 
*********************************************************************************************************
 
`Kubernetes` - это платформа для автоматизации развертывания, масштабирования и управления контейнеризированными приложениями. Kubernetes обеспечивает среду для управления и развертывания контейнеров, обеспечивая автоматическое масштабирование, управление ресурсами, работу с хранилищем данных, сетевую конфигурацию и балансировку нагрузки. Он также позволяет упростить работу с микросервисами и динамическими окружениями.
 
Вот некоторые из задач, которые Kubernetes решает:
 
1. Оркестрация контейнеров: Kubernetes автоматически размещает, перераспределяет и масштабирует контейнеры на основе требований приложения, что упрощает управление множеством контейнеров.
 
2. Масштабирование: Kubernetes позволяет легко масштабировать приложение вверх или вниз в зависимости от нагрузки, и при этом обеспечивает балансировку нагрузки и высокую доступность приложений.
 
3. Управление ресурсами: Kubernetes предоставляет возможности для управления ресурсами, учитывая производительность и надежность приложений в многоконтейнерной среде.
 
4. Сетевая конфигурация: Kubernetes обеспечивает средства для настройки сетевых связей между контейнерами, позволяя им свободно взаимодействовать друг с другом.
 
5. Распределенное хранилище данных: Kubernetes предоставляет возможности для работы с распределенным хранилищем данных, позволяя контейнерам сохранять и использовать данные даже при пересоздании или перераспределении.
 
6. Автоматизация процессов развертывания и обновления: Kubernetes позволяет автоматически развертывать и обновлять приложения, что упрощает процессы разработки и обслуживания.
 
В целом, Kubernetes упрощает управление контейнеризированными приложениями, повышая их отказоустойчивость, масштабируемость и обеспечивая высокую доступность в современных динамических средах облачных вычислений.
 
*Cluster* – набор узлов (nodes), на которых запускаются контейнеризированные приложения.
*Master node* – узел, который управляет состоянием кластера и другими (worker nodes) узлами.
*Worker node* – узел на котором запускается контейнеризированное приложение.
*Pods* – абстракция над одним или несколькими контейнерами.
*Service* – абстрактный объект, который определяет набор подов и доступ к ним.С помощью сервисов контейнеры могут взаимодействовать между собой.
*Ingress* - открывает доступ к кластеру извне и управляет трафиком.
 
*********************************************************************************************************
 
`CI/CD` расшифровывается как Continuous Integration/Continuous Deployment (непрерывная интеграция/непрерывное развертывание) и представляет собой набор методологий, процессов и практик, которые сосредотачиваются на автоматизации процесса разработки, тестирования и развертывания программного обеспечения.
 
*Continuous Integration (непрерывная интеграция)* - это практика, при которой разработчики интегрируют свой код в общий репозиторий несколько раз в день. При этом каждая интеграция проходит автоматизированные тесты, что позволяет выявить и исправить ошибки как можно раньше. CI помогает избежать конфликтов между кодами разных разработчиков, а также своевременно обнаруживать и решать проблемы интеграции.
 
*Continuous Deployment (непрерывное развертывание)* - это практика автоматизированного развертывания кода в продакшн среду после успешного прохождения всех тестов. Целью Continuous Deployment является автоматизация процесса развертывания, чтобы ускорить цикл разработки и улучшить качество обслуживания, а также сделать развертывание менее подверженным человеческим ошибкам.
 
CI/CD был придуман для того, чтобы упростить и ускорить процесс разработки программного обеспечения, улучшить качество кода и повысить прозрачность процессов разработки. Он также позволяет командам быстрее реагировать на изменения требований, уменьшает риски при развертывании изменений в продакшн среде и способствует автоматизации всех этапов жизненного цикла разработки программного обеспечения.
 
*********************************************************************************************************
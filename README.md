# Упражнения по JavaScript

Эти упражнения по JavaScript предназначены для дополнения материалов по JavaScript на курсе. Их следует выполнять только по инструкции в ходе учебного процесса.

**Примечание:** Файл `generator-exercise` на самом деле не является упражнением; это сценарий, который генерирует упражнения. Он был создан для эффективного написания этих задач.

## Внесение вклада

Если у вас есть предложение по улучшению упражнения, идея для нового упражнения или замечание по поводу существующего упражнения, не стесняйтесь говорить об этом ментору.

## Как использовать эти упражнения


1. Сделайте форк и клонируйте этот репозиторий. Чтобы узнать, как сделать форк репозитория, ознакомьтесь с документацией GitHub по [fork a repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo).
   - Копии репозиториев на вашем компьютере называются клонами. Если вам нужна помощь с клонированием на локальное окружение, вы можете узнать это из документации GitHub по [cloning a repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository).
2. Прежде чем приступить к выполнению упражнений, убедитесь, что у вас установлены следующие компоненты:
   - **NPM**. Вы уже должны были установить NPM в нашем уроке по установке NodeJS. Просто на всякий случай проверьте, введя `npm --version` в вашем терминале. Если вы получите ответ `Command 'npm' not found, but can be installed with:`, **не следуйте инструкциям в терминале** по установке с использованием `apt-get`, так как это вызывает проблемы с разрешениями. Вместо этого вернитесь к уроку по установке и установите Node с помощью NVM, следуя инструкциям там.
   - **Jest**. После клонирования этого репозитория на вашем локальном компьютере и установки NPM, перейдите в только что созданный каталог (`cd javascript-exercises`) и выполните `npm install`. Это установит Jest и настроит платформу тестирования на основе наших предварительно настроенных параметров. (Примечание: если вы видите предупреждения о том, что пакеты устарели или содержат уязвимости, вы можете игнорировать их для этих упражнений.)
   
3. Каждое упражнение включает в себя следующее:

   - Файл с расширением markdown с описанием задачи, пустой (или почти пустой) файл JavaScript и набор тестов.
   - Каталог `solutions`, содержащий решение и тот же файл тестов с отключенными тестами.

   Для завершения упражнения вам нужно перейти в каталог упражнения с помощью `cd exerciseName` в терминале и выполнить `npm test exerciseName.spec.js`. Это должно запустить файл тестов и показать вам результат. При первом запуске теста он не пройдет. Это сделано намеренно! Вам нужно открыть файл упражнения и написать код, необходимый для прохождения теста.
4. Некоторые упражнения имеют условия теста, определенные в их файле spec как `test.skip` по сравнению с `test`. Это сделано намеренно. После прохождения одного `test` вы измените следующий `test.skip` на `test` и снова протестируете свой код. Вы будете делать это, пока все условия не будут выполнены. **Все тесты должны быть пройдены одновременно**, и у вас не должно быть ни одного случая `test.skip` к моменту завершения упражнения.
5. Как только вы успешно закончите упражнение, проверьте каталог `solutions` внутри каждого упражнения, чтобы сравнить его с вашим.
   - Вы не должны проверять решение упражнения, пока не закончите его!
   - Имейте в виду, что решение от TOP - не единственное верное. Как правило, если все тесты проходят, ваше решение должно быть правильным.
6. Не предоставляйте свои решения в этот репозиторий, так как любые запросы на внесение изменений, сделанные таким образом, будут закрыты без слияния.

**Примечание**: Из-за того, как Jest обрабатывает неудачные тесты, он может возвращать код завершения 1 в случае сбоя любых тестов. NPM интерпретирует это как ошибку, и после выполнения Jest вы можете увидеть некоторые сообщения `npm ERR!`. Вы можете их игнорировать или запустить тест с параметром `npm test exerciseName.spec.js --silent`, чтобы подавить ошибки.

Первое упражнение, `helloWorld`, подробно расскажет вам о процессе. 

## Отладка

Для отладки функций вы можете запускать тесты в терминале отладчика Visual Studio Code. Вы можете открыть его, нажав на значок "Запустить и отладить" слева или нажав <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>D</kbd>, затем выбрав JavaScript Debug Terminal. Вы сможете устанавливать точки останова, как в отладчике Chrome DevTools. Затем вы можете выполнить `npm test exerciseName.spec.js`, чтобы выполнить ваш код до точки останова и пройти через код по мере необходимости. **ПРИМЕЧАНИЕ**: Чтобы воспользоваться отладчиком, вы **ОБЯЗАНЫ** запускать сценарий в терминале отладчика, а не в терминале bash или zsh.
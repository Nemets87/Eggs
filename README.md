# Eggs
back_and_front_test_django

Создайте в папке Dev (она уже есть на вашем компьютере) отдельную директорию Eggs 
скачать код можно:
https://github.com/Nemets87/Eggs

в папке Eggs рядом с eggs нужно создать окружение:
Linux/macOS: python3 -m venv venv
Windows: python -m venv venv или py -3 -m venv venv.

Активируйте виртуальное окружение: из директории Dev/Eggs  выполните команду:
Linux/macOS: source venv/bin/activate
Windows: source venv/Scripts/activate.

Обновите пакетный менеджер:
Linux/macOS: python3 -m pip install --upgrade pip
Windows: python -m pip install --upgrade pip.

В активированном виртуальном окружении загрузите все зависимости из файла requirements.txt
pip install -r requirements.txt

перейдите в папку eggs и запустите сервер

python manage.py runserver # В Windows
# или
python3 manage.py runserver # В Linux/macOS.

можно выполнить миграции - но пока они ничего толкового не принесут)
python manage.py migrate 

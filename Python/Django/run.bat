cd c:\
mkdir projectOne
cd projectOne
mkdir frontend
mkdir backend
echo %cd%
cd backend
echo %cd%
@REM python -m venv myenviroment
@REM cd myenviroment
@REM echo %cd%
@REM cd Scripts
@REM echo %cd%
@REM start .\activate.bat 
pip install django
pip install freeze
pip install djangorestframework
@REM pip freeze --local
@REM deactivate.bat
@REM cd ..
@REM cd ..
@REM REM  django-admin startporject api
@REM TIMEOUT /T 20
@REM PAUSE



REM #pip install --upgrade pip
REM python -m pip install --upgrade
REM python -m pip install -r requirements.txt
pip install django
pip install freeze
pip install djangorestframework
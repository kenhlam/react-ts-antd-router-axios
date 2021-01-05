@echo off


:start
echo 1.��װ����
echo 2.����
echo 3.���

set/p action=��ѡ�����
if %action% == 1 (
cmd /k yarn install
) else if %action% == 2 (
cmd /k yarn start
)else (
  cmd /k yarn run build  
)

:end



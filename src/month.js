export function getMonth(monthNumber) {
    if (typeof monthNumber !== 'number' || monthNumber < 1 || monthNumber > 12) {
      throw new Error('Неверный номер месяца')
    }
  
    const months = [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь'
    ]
  
    return months[monthNumber - 1]
}
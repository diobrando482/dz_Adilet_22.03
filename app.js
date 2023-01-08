//первое задание
var serial = {
    name:'jojo bizare adventure',
    realiseDate:'1987',
    realisedIn:'2012',
    episodes:" 190",
    nameActor:'krytoi chelovek',
    mainActor:'Джонатан Джостар,Джозеф Джостар,Джотаро Куджо,Джоске Хигашиката,Джорно Джованна,Джолин Куджо,Джони Джостар,Джоске Хигашиката '
}
console.log('сериал '+serial.name, 'был выпущен '+serial.realisedIn + ' году ', 'в главных ролях '+ serial.mainActor ,'В'+serial.name+ serial.episodes+"эпизодов" )
//второе задание
var day = 'monday';
switch (day){
    case('monday'):
    case('Monday'):
        console.log('понедельник')
        break
    case('tuesday'):
    case('Tuesday'):
        console.log('вторник')
        break
    case('wednesday'):
    case('Wednesday'):
        console.log('среда')
        break
    case('thursday'):
    case('Thursday'):
        console.log('четверг')
        break
    case('friday'):
    case('Friday'):
        console.log('пятница')
        break
    case('saturday'):
    case('Saturday'):
        console.log('суббота')
        break
    case('sunday'):
    case('Sunday'):
        console.log('воскресенье')
        break
}
import React from "react"

import Typing from "../comps/Effects"

export default () => {
    return (
        <>
            <h1>About</h1>
            <Typing lines={["> System", "Тест системы_", "Init 0"]} speed={160} />
            <Typing lines={["[  ОК  ] Загрузка ядра..."]} speed={40} />
            <Typing lines={["[  ОК  ] Инициализация программной жопы..."]} speed={40} delay={3000}/>
            <Typing line={[
               `[  DONE  ] Загрузка ядра...
                [  DONE  ] Инициализация программной жопы...
                [  100%  ] Идет загрузка компонентов... Подождите...`
            ]} speed={60} mode={"multi"}/>
        </>
    )
}
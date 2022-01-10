import React from "react"

import { MultiLine, Line } from "../comps/Typing"

export default () => {
    return (
        <div>
            <h1>About</h1>
            <p><Line lines={["H12345", "Тест системы", "Тест 2"]} speed={400} /></p>
            <p><Line lines={["[  ОК  ] Загрузка ядра..."]} speed={40} /></p>
            <p><Line lines={["[  ОК  ] Инициализация программной жопы..."]} speed={40} delay={3000}/></p>
            <MultiLine line={[
               `[  DONE  ] Загрузка ядра...
                [  DONE  ] Инициализация программной жопы...
                [  13%  ] Идет загрузка компонентов... Подождите...`
            ]} speed={60} />
        </div>
    )
}
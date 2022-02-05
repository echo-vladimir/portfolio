import React from "react"

import Typing from "../comps/Effects"

export default () => {
    return (
        <main className="content">
            <h1>About</h1>
            <div className="loading">
                {/* <Typing text={`[  DONE  ] Загрузка ядра...
                [  DONE  ] Инициализация программной жопы...
                [  100%  ] Идет загрузка компонентов... Подождите...`} speed={160} /> */}
                <Typing text={`uhafbuadfug87eryg83qqtg8947tyg8yrgh8yqergfy8reПРИВЕТ`} speed={160} />
                {/* <Typing lines={["> System", "Тест системы_", "Init 0"]} speed={160} /> */}
                {/* <Typing lines={["[  ОК  ] Загрузка ядра..."]} speed={40} />
                <Typing lines={["[  ОК  ] Инициализация программной жопы..."]} speed={40} delay={3000} /> */}
            </div>
        </main>
    )
}
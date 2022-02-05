import React from "react"
import "./Loading.css"

import Typing from "../comps/Effects"

export default () => {
    return (
        <>
            <div className="loading">
                <Typing line={[
                    `[   DONE   ] Загрузка ядра...
                     [   DONE   ] Инициализация программной жопы...
                     [   13%    ] Идет загрузка компонентов... Подождите...`
                ]} speed={10} mode={"multi"} />
            </div>
        </>
    )
}
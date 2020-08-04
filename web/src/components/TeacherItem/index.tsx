import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import "./styles.css";

export default function TeacherItem() {
    return (
        
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/62475626?s=460&u=66c87c1ce1f843b48e1333fe21c40a09c9660bac&v=4" alt="Samuel KUETA"/>
                <div>
                    <strong>Samuel Kueta</strong>
                    <span>Matematica</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de matematica avançada.
                <br /><br/>
                Apaixonado por bater casos dificeis e por deixar as outras pessoas a verem fumo. Ja bateu todos os casos do Mordokovic em apenas uma semana.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

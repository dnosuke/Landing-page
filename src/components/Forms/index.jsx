import React from "react";
import * as C from "./styles"

export const Forms = () => {

    return (
        <C.Container>

            <div className="title">
                Contate-nos
            </div>

            <div className="form">
                <div class="field">
                    <label class="label">Nome</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="" />
                    </div>
                </div>

                <div class="field">
                    <label class="label">Email</label>
                    <div class="control has-icons-right">
                        <input class="input" type="email" placeholder="" value="" />
                        <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                        </span>
                        <span class="icon is-small is-right">
                            <i class="fas fa-exclamation-triangle"></i>
                        </span>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Assunto</label>
                    <div class="control">
                        <div class="select">
                            <select>
                                <option>Indústria Geral</option>
                                <option>Mineração em Terra</option>
                                <option>Construção</option>
                                <option>Outros</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Mensagem</label>
                    <div class="control">
                        <textarea class="textarea" placeholder=""></textarea>
                    </div>
                </div>

                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-link">Enviar</button>
                    </div>
                </div>
            </div>

            <div className="icons">
                <i class="uil uil-facebook"></i>
                <i class="uil uil-instagram-alt"></i>
                <i class="uil uil-linkedin"></i>
                <i class="uil uil-twitter"></i>
            </div>
        </C.Container>
    )
}
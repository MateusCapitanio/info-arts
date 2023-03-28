import React from 'react';

export default function Header() {
    return (
        <nav className="flex bg-custom-gray justify-center">
            <ul className="flex items-center w-full m-5 p-4 rounded-3xl bg-red-500 justify-between">
                <span>logo</span>
                <div className="flex">
                    <li className="px-10 py-3 border-2 rounded-full m-2 text-white">Home</li>
                    <li className="px-10 py-3 border-2 rounded-full m-2 text-white">Sobre</li>
                    <li className="px-10 py-3 border-2 rounded-full m-2 text-white">Produtos</li>
                    <li className="px-10 py-3 border-2 rounded-full m-2 text-white">Endereço</li>
                    <li className="px-10 py-3 border-2 rounded-full m-2 text-white">Contato</li>
                </div>
                <button>Get started</button>
            </ul>
        </nav>
    )
}
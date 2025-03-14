<script lang="ts">
    import Container from "@components/Container.svelte";
    import IconButtonBadge from "@components/IconButtonBadge.svelte";
</script>

<Container name="hero">
    <div class="relative flex flex-col-reverse items-center md:flex-row">
        <div class="row items-center py-5 md:w-7/12">
            <div class="text-left space-y-3">
                <h1 class="text-5xl font-medium leading-none md:text-6xl text-center">
                    Congreso Nacional de Estudiantes de Ingeniería Civil de Colombia
                </h1>
                <h2 class="text-2xl font-medium leading-none md:text-4xl my-2 text-center">
                    Edición 2024
                </h2>
            </div>
        </div>
        <div class="flex items-center justify-center py-5 md:w-5/12">
            <img src="/CONEIC2024.webp" alt="A beatiful icon" />
        </div>
    </div>
</Container>

<Container>
    <article class="bg-white">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt class="text-base leading-7 text-gray-600">Fechas</dt>
                    <dd class="order-first text-3xl font-semibold tracking-tight sm:text-5xl">
                        5 al 9 de noviembre
                    </dd>
                </div>
                <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt class="text-base leading-7 text-gray-600">Asistentes</dt>
                    <dd class="order-first text-3xl font-semibold tracking-tight sm:text-5xl">
                        +200 estudiantes
                    </dd>
                </div>
                <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt class="text-base leading-7 text-gray-600">Dónde</dt>
                    <dd class="order-first text-3xl font-semibold tracking-tight sm:text-5xl">
                        Santa Marta, Magdalena
                    </dd>
                </div>
            </dl>
        </div>
    </article>
</Container>

<Container>
    <p class="text-xl text-center my-8 mb-16">
        Sumérgete en el CONEIC 2024, un emocionante congreso que explora la ingeniería en entornos
        costeros y marítimos. Desde infraestructuras portuarias hasta desarrollos urbanos
        sostenibles, descubrirás cómo enfrentar desafíos como la erosión costera y el cambio
        climático. ¡Innovación, sostenibilidad y maravillas del mar te esperan!
    </p>
    <p></p></Container>

<!-- <Container>
        <section class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <article
                class="w-full  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8"
            >
                <h5 class="mb-4 text-xl font-medium text-gray-500">Plan oro</h5>
                <div class="flex items-baseline text-gray-900">
                    <span class="text-3xl font-semibold">$</span>
                    <span class="text-5xl font-extrabold tracking-tight">49</span>
                    <span class="ms-1 text-xl font-normal text-gray-500">/month</span>
                </div>
                <ul role="list" class="space-y-5 my-7">
                    <li class="flex items-center">
                        <svg
                            class="flex-shrink-0 w-4 h-4 text-blue-700"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                            ></path>
                        </svg>
                        <span
                            class="text-base font-normal leading-tight text-gray-500 ms-3"
                            >2 team members</span
                        >
                    </li>
                    <li class="flex">
                        <svg
                            class="flex-shrink-0 w-4 h-4 text-blue-700"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                            ></path>
                        </svg>
                        <span
                            class="text-base font-normal leading-tight text-gray-500 ms-3"
                            >20GB Cloud storage</span
                        >
                    </li>
                    <li class="flex">
                        <svg
                            class="flex-shrink-0 w-4 h-4 text-blue-700"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                            ></path>
                        </svg>
                        <span
                            class="text-base font-normal leading-tight text-gray-500 ms-3"
                            >Integration help</span
                        >
                    </li>
                    <li class="flex line-through decoration-gray-500">
                        <svg
                            class="flex-shrink-0 w-4 h-4 text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                            ></path>
                        </svg>
                        <span
                            class="text-base font-normal leading-tight text-gray-500 ms-3"
                            >Sketch Files</span
                        >
                    </li>
                    <li class="flex line-through decoration-gray-500">
                        <svg
                            class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                            ></path>
                        </svg>
                        <span
                            class="text-base font-normal leading-tight text-gray-500 ms-3"
                            >API Access</span
                        >
                    </li>
                    <li class="flex line-through decoration-gray-500">
                        <svg
                            class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                            ></path>
                        </svg>
                        <span
                            class="text-base font-normal leading-tight text-gray-500 ms-3"
                            >Complete documentation</span
                        >
                    </li>
                    <li class="flex line-through decoration-gray-500">
                        <svg
                            class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                            ></path>
                        </svg>
                        <span
                            class="text-base font-normal leading-tight text-gray-500 ms-3"
                            >24×7 phone & email support</span
                        >
                    </li>
                </ul>
                <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
                    >Choose plan</button
                >
            </article>
            <article
                class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8"
            >
                <h5 class="mb-4 text-xl font-medium text-gray-500">Plan platino</h5>
                <div class="flex items-baseline text-gray-900">
                    <span class="text-3xl font-semibold">$</span>
                    <span class="text-5xl font-extrabold tracking-tight">49</span>
                    <span class="ms-1 text-xl font-normal text-gray-500">/month</span>
                </div>
                <ul role="list" class="space-y-5 my-7">
                    <li class="flex items-center">
                        <svg
                            class="flex-shrink-0 w-4 h-4 text-blue-700"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                            ></path>
                        </svg>
                        <span
                            class="text-base font-normal leading-tight text-gray-500 ms-3"
                            >2 team members</span
                        >
                    </li>
                    <li class="flex">
                        <svg
                            class="flex-shrink-0 w-4 h-4 text-blue-700"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                            ></path>
                        </svg>
                        <span
                            class="text-base font-normal leading-tight text-gray-500 ms-3"
                            >20GB Cloud storage</span
                        >
                    </li>
                    <li class="flex">
                        <svg
                            class="flex-shrink-0 w-4 h-4 text-blue-700"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                            ></path>
                        </svg>
                        <span
                            class="text-base font-normal leading-tight text-gray-500 ms-3"
                            >Integration help</span
                        >
                    </li>
                    <li class="flex line-through decoration-gray-500">
                        <svg
                            class="flex-shrink-0 w-4 h-4 text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                            ></path>
                        </svg>
                        <span
                            class="text-base font-normal leading-tight text-gray-500 ms-3"
                            >Sketch Files</span
                        >
                    </li>
                    <li class="flex line-through decoration-gray-500">
                        <svg
                            class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                            ></path>
                        </svg>
                        <span
                            class="text-base font-normal leading-tight text-gray-500 ms-3"
                            >API Access</span
                        >
                    </li>
                    <li class="flex line-through decoration-gray-500">
                        <svg
                            class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                            ></path>
                        </svg>
                        <span
                            class="text-base font-normal leading-tight text-gray-500 ms-3"
                            >Complete documentation</span
                        >
                    </li>
                    <li class="flex line-through decoration-gray-500">
                        <svg
                            class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                            ></path>
                        </svg>
                        <span
                            class="text-base font-normal leading-tight text-gray-500 ms-3"
                            >24×7 phone & email support</span
                        >
                    </li>
                </ul>
                <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
                    >Choose plan</button
                >
            </article>
            <article
                class="w-full  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8"
            >
                <h5 class="mb-4 text-xl font-medium text-gray-500">Plan plata</h5>
                <div class="flex items-baseline text-gray-900">
                    <span class="text-3xl font-semibold">$</span>
                    <span class="text-5xl font-extrabold tracking-tight">49</span>
                    <span class="ms-1 text-xl font-normal text-gray-500">/month</span>
                </div>
                <ul role="list" class="space-y-5 my-7">
                    <li class="flex items-center">
                        <svg
                            class="flex-shrink-0 w-4 h-4 text-blue-700"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                            ></path>
                        </svg>
                        <span
                            class="text-base font-normal leading-tight text-gray-500 ms-3"
                            >2 team members</span
                        >
                    </li>
                    <li class="flex">
                        <svg
                            class="flex-shrink-0 w-4 h-4 text-blue-700"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                            ></path>
                        </svg>
                        <span
                            class="text-base font-normal leading-tight text-gray-500 ms-3"
                            >20GB Cloud storage</span
                        >
                    </li>
                    <li class="flex">
                        <svg
                            class="flex-shrink-0 w-4 h-4 text-blue-700"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                            ></path>
                        </svg>
                        <span
                            class="text-base font-normal leading-tight text-gray-500 ms-3"
                            >Integration help</span
                        >
                    </li>
                    <li class="flex line-through decoration-gray-500">
                        <svg
                            class="flex-shrink-0 w-4 h-4 text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                            ></path>
                        </svg>
                        <span
                            class="text-base font-normal leading-tight text-gray-500 ms-3"
                            >Sketch Files</span
                        >
                    </li>
                    <li class="flex line-through decoration-gray-500">
                        <svg
                            class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                            ></path>
                        </svg>
                        <span
                            class="text-base font-normal leading-tight text-gray-500 ms-3"
                            >API Access</span
                        >
                    </li>
                    <li class="flex line-through decoration-gray-500">
                        <svg
                            class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                            ></path>
                        </svg>
                        <span
                            class="text-base font-normal leading-tight text-gray-500 ms-3"
                            >Complete documentation</span
                        >
                    </li>
                    <li class="flex line-through decoration-gray-500">
                        <svg
                            class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                            ></path>
                        </svg>
                        <span
                            class="text-base font-normal leading-tight text-gray-500 ms-3"
                            >24×7 phone & email support</span
                        >
                    </li>
                </ul>
                <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
                    >Choose plan</button
                >
            </article>
        </section>
    </Container> -->

<IconButtonBadge
    title="¿Quieres más noticias?"
    description="Sigue nuestra cuenta de Instagram donde estamos subiendo los avances de esta edición del congreso."
    button="Síguenos"
    link="https://www.instagram.com/coneicco_oficial"
    icon="/InstagramDecoration.svg" />

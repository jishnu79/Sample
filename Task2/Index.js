const Index = () => {
    const { useState } = React
    const [text, setText] = useState('')
    const submit = (e) => {
        console.log(text);
    }
    return (

        <section class="py-1 bg-blueGray-50">
            <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">


                    <div class="block w-full overflow-x-auto">
                        <table class="items-center bg-transparent w-full border-collapse ">
                            <thead>
                                <tr>
                                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        MONTH 1
                                    </th>
                                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">

                                    </th>
                                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">

                                    </th>
                                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">

                                    </th>
                                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">

                                    </th>
                                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">

                                    </th>
                                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">

                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <th class="border-b px-6 align-middle border-l border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                        OnBording calls
                                    </th>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">
                                        {/* <input/> */}
                                    </td>
                                    <td class="border-b px-6 align-center border-l border-r text-xs whitespace-nowrap p-4">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                </tr>
                                <tr>
                                    <th class="border-b px-6 align-middle border-l border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                        Google search console Access
                                    </th>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-center border-l border-r text-xs whitespace-nowrap p-4">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                </tr>
                                <tr>
                                    <th class="border-b px-6 align-middle border-l border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                        Google Analytics Access
                                    </th>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-center border-l border-r text-xs whitespace-nowrap p-4">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                </tr>
                                <tr>
                                    <th class="border-b px-6 align-middle border-l border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                        Website Access
                                    </th>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-center border-l border-r text-xs whitespace-nowrap p-4">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                </tr>
                                <tr>
                                    <th class="border-b px-6 align-middle border-l border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                        Technical Audit
                                    </th>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-center border-l border-r text-xs whitespace-nowrap p-4">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                </tr>
                                <tr>
                                    <th class="border-b px-6 align-middle border-l border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                        Anchor Text and Semantic Analysis
                                    </th>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-center border-l border-r text-xs whitespace-nowrap p-4">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                </tr>
                                <tr>
                                    <th class="border-b px-6 align-middle border-l border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                        Compatitor Analysis
                                    </th>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-center border-l border-r text-xs whitespace-nowrap p-4">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                </tr>
                                <tr>
                                    <th class="border-b px-6 align-middle border-l border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                        Anchor Text/URL Mapping
                                    </th>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-center border-l border-r text-xs whitespace-nowrap p-4">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                </tr>
                                <tr>
                                    <th class="border-b px-6 align-middle border-l border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                        Google studio Report
                                    </th>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-center border-l border-r text-xs whitespace-nowrap p-4">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                </tr>
                                <tr>
                                    <th class="border-b px-6 align-middle border-l border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                        Site level Optimisation
                                    </th>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-center border-l border-r text-xs whitespace-nowrap p-4">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                </tr>
                                <tr>
                                    <th class="border-b px-6 align-middle border-l border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                        On Page Optimisation
                                    </th>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-center border-l border-r text-xs whitespace-nowrap p-4">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                </tr>
                                <tr>
                                    <th class="border-b px-6 align-middle border-l border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                        Content creation
                                    </th>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-center border-l border-r text-xs whitespace-nowrap p-4">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                </tr>
                                <tr>
                                    <th class="border-b px-6 align-middle border-l border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                        Content Publishing
                                    </th>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-center border-l border-r text-xs whitespace-nowrap p-4">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                </tr>
                                <tr>
                                    <th class="border-b px-6 align-middle border-l border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                        Premium Press relise
                                    </th>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-center border-l border-r text-xs whitespace-nowrap p-4">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                </tr>
                                <tr>
                                    <th class="border-b px-6 align-middle border-l border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                        Premium Press relese
                                    </th>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-center border-l border-r text-xs whitespace-nowrap p-4">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                </tr>
                                <tr>
                                    <th class="border-b px-6 align-middle border-l border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                        Authority niche
                                    </th>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-center border-l border-r text-xs whitespace-nowrap p-4">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                </tr>
                                <tr>
                                    <th class="border-b px-6 align-middle border-l border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                        review management
                                    </th>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                    <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">

                                    </td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}

ReactDOM.render(<Index />, document.querySelector('#form'));

import { getDatas, updateData } from "./api";

const Index = () => {
    const { useState, useEffect } = React
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState({...data});

    useEffect(() => {
        getDatas().then((data) => {
            setData(data);
        });
    }, []);

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const updatedFormData = [...formData];
        updatedFormData[index] = { ...updatedFormData[index], [name]: value };
        setFormData(updatedFormData);

        setTimeout(() => {
            updateData(updatedFormData);
        }, 30000);
    };

    return (
        <section class="py-1 bg-blueGray-50">
            <div class="w-full xl:w-full mb-12 xl:mb-0 px-4 mx-auto mt-24">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                    <div class="block w-full overflow-x-auto">
                        <table class="items-center bg-transparent w-full border-collapse ">
                            <thead>
                                <tr>
                                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        MONTH 1
                                    </th>
                                    {/* Add additional headers as needed */}
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map((value, ind) => (
                                    <tr key={ind}>
                                        <th class="border-b px-6 align-middle border-l border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                            {value?.head}
                                        </th>
                                        <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">
                                            <input
                                                name="one"
                                                value={formData[ind]?.one || ''}
                                                onChange={(e) => handleChange(e, ind)}
                                            />
                                        </td>
                                        <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">
                                            <input
                                                name="one"
                                                value={formData[ind]?.two || ''}
                                                onChange={(e) => handleChange(e, ind)}
                                            />
                                        </td>
                                        <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">
                                            <input
                                                name="one"
                                                value={formData[ind]?.three || ''}
                                                onChange={(e) => handleChange(e, ind)}
                                            />
                                        </td>
                                        <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">
                                            <input
                                                name="one"
                                                value={formData[ind]?.four || ''}
                                                onChange={(e) => handleChange(e, ind)}
                                            />
                                        </td>
                                        <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">
                                            <input
                                                name="one"
                                                value={formData[ind]?.five || ''}
                                                onChange={(e) => handleChange(e, ind)}
                                            />
                                        </td>
                                        <td class="border-b px-6 align-middle border-l border-r text-xs whitespace-nowrap p-4 ">
                                            <input
                                                name="one"
                                                value={formData[ind]?.six || ''}
                                                onChange={(e) => handleChange(e, ind)}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

ReactDOM.render(<Index />, document.querySelector('#form'));

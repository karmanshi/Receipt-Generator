import React, { useState,useEffect } from 'react'
import ProductPopUp from './ProductPopUp'

const Reciept = () => {
    const [Name, setName] = useState (() => {
        return JSON.parse(localStorage.getItem('name')) || ''
    })
    const [phone, setPhone] = useState(() => {
        return JSON.parse(localStorage.getItem('phone')) || ''
    })
    const [email, setEmail] =  useState(() => {
        return JSON.parse(localStorage.getItem('email')) || ''
    })
    const [receipt, setReceipt] =  useState(() => {
        return JSON.parse(localStorage.getItem('receipt')) || ''
    })
    const [date, setDate] =  useState(() => {
        return JSON.parse(localStorage.getItem('date')) || ''
    })
    const [productList,setProductList]=useState (() => {
        return JSON.parse(localStorage.getItem('products')) || []
    })

    const handleClick = (choice) => {
        switch (choice) {
            case 'name':
                let name = prompt("Enter Your Name")
                setName(name)
                localStorage.setItem('name', JSON.stringify(name))
                break;
            case 'phone':
                let phone = prompt("Enter Your Phone Number")
                setPhone(phone)
                localStorage.setItem('phone', JSON.stringify(phone))
                break;
            case 'receipt':
                let receipt = prompt("Enter Your Receipt Number")
                setReceipt(receipt)
                localStorage.setItem('receipt', JSON.stringify(receipt))
                break;
            case 'email':
                let email = prompt("Enter Your Email Id")
                setEmail(email)
                localStorage.setItem('email', JSON.stringify(email))
                break;
            default:
                break;
        }
    }

    const handleDate = (e) => {
        let date = e.target.value
        setDate(date)
        localStorage.setItem('date', JSON.stringify(date))
    }

    const handleDelete = (e) => {
        const dataDelete = [...productList]
        dataDelete.splice(e.target.name, 1)
        setProductList([...dataDelete])
    }

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(productList))
    }, [productList]);

    return (
        <div className=' flex justify-center mt-3'>
            <div className='w-3/4 '>
                {/* Header */}
                <div className='bg-cyan-200 flex justify-center h-24 items-center	'>
                    <div className='text-center text-3xl text-black font-extrabold'>Payment Receipt</div>
                </div>

                {/* User Data */}
                <div className='grid grid-flow-col gap-4 mt-5 bg-gray-100 p-4'>
                    <div className='col-span-2'>
                        <div className='my-2'>
                            <span className='text-xl text-black font-semibold'>Name:</span>
                            <span className='px-3 mx-2 text-lg' onClick={() => { handleClick("name") }}>{Name || 'Click here to update name'} </span>
                        </div>
                        <div className='my-2'>
                            <span className='text-xl text-black font-semibold'>Phone Number:</span>
                            <span className='px-3 mx-2 text-lg' onClick={() => { handleClick("phone") }}>{phone || 'Click here to update Phone Number'} </span>
                        </div>
                        <div className='my-2'>
                            <span className='text-xl text-black font-semibold'>Receipt Number:</span>
                            <span className='px-3 mx-2 text-lg' onClick={() => { handleClick("receipt") }}>{receipt || 'Click here to update Phone Number'} </span>
                        </div>
                    </div>
                    <div className='col-span-2'>
                        <div className='my-2'>
                            <span className='text-xl text-black font-semibold'>Date:</span>
                            <span className='px-3 mx-2 text-lg'>
                                <input className='bg-gray-100' type='date' value={date} onChange={handleDate} />
                            </span>
                        </div>
                        <div className='my-2'>
                            <span className='text-xl text-black font-semibold'>Email Id:</span>
                            <span className='px-3 mx-2 text-lg' onClick={() => { handleClick("email") }}>{email || 'Click here to update Email Id'} </span>
                        </div>
                    </div>

                </div>

                {/* Table */}
                <div className='grid grid-flow-col gap-4 mt-5 bg-gray-100 p-4'>
                    <div className='col-span-1'>
                        <div className='flex justify-end'>
                            <ProductPopUp productList={productList} setProductList={setProductList}/>
                            </div>
                        <table className="mt-5 p-5 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Product Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Quantity
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Total Amount
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                    
                                    </th>
                                </tr>
                            </thead>
                            <tbody>

                                {productList.map((elements, index) => {
                                    return <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                        <td className="px-6 py-4">{elements.productName}</td>
                                        <td className="px-6 py-4">{elements.price}</td>
                                        <td className="px-6 py-4">{elements.quantity}</td>
                                        <td className="px-6 py-4">{elements.totalAmount}</td>
                                        <td className="px-6 py-4">
                                            <button
                                                type='button'
                                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                                key={index}
                                                name={index}
                                                onClick={handleDelete}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Reciept
import React, { useMemo } from 'react';
import { deleteApi } from '@/api/textapi';
import { format } from 'date-fns/format';
import { HiArchiveBoxXMark } from 'react-icons/hi2';
import toast from 'react-hot-toast';

interface Text {
    data?: Record<string, any>
}

const Cards: React.FC<Text> = ({ data }) => {
    const deleteText = (id: number) => {
        if (id) {
            if (confirm("Are you sure?")) {
                deleteApi(id).then((dat) => {
                    if (dat) {
                        toast.success("Deleted!")
                    } else {
                        toast.error("Try agin")
                    }
                })
            }

        } else {
            toast.error("Tryagin")
        }
    }
    const createsAt = useMemo(() => {
        if (!data?.created_at) {
            return null
        } else {
            return format(new Date(data.created_at), ' yyyy MMMM dd, h:mm a')
        }
    }, [data?.created_at])
    return (
        <div
            className="col-span-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
            <a>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {
                        data?.content
                    }
                </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Created at: {createsAt}
            </p>
            <HiArchiveBoxXMark
                onClick={() => {
                    deleteText(data?.id)
                }} />
        </div>
    );
};

export default Cards;
import React from 'react';

type MyState ={
    task: string,
    description: string,
    isDone: boolean
}

export default class Todos extends React.Component< any, MyState >{
    constructor(props: any) {
        super(props);
        this.state = {
            task: 'Task 1',
            description: 'This is important',
            isDone: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e: any) {
        e.preventDefault();
        console.log(e.target[0])
        console.log('Task added to arr!')
    }

    render() {
        return (
            <div className='bg-white max-w-fit box-border border-black border-2 rounded-3xl m-4 p-5 fixed mx-auto inset-x-0'>
                <form onSubmit={this.handleSubmit}>
                    <div className='mt-3 flex flex-col justify-center items-start'>
                        <label 
                            htmlFor='task' 
                            className='labels'>
                            Task
                        </label>
                        <input 
                            className='border-2 border-gray-600 rounded-lg p-1 box-border'
                            type='text' 
                            name='task' 
                            defaultValue={this.state.task} />
                    </div>
                    <div className='mt-3 flex flex-col justify-center items-start'>
                        <label 
                            htmlFor='description'
                            className='labels'>
                            Description
                            <span className='text-gray-500 font-normal text-sm'>(optional)</span>
                        </label>
                        <textarea 
                            className='border-gray-600 border-2 p-1'
                            value={this.state.description} />
                    </div>
                    <div className='mt-3'>
                        <label className='labels'>
                            Status
                        </label>
                        <div className='flex justify-start items-center'>
                            <input type='checkbox' />
                            <label className='ml-2'>
                                Pending
                            </label>
                        </div>
                        <div className='flex justify-start items-center'>
                            <input type='checkbox' />
                            <label className='ml-2'>
                                Completed
                            </label>
                        </div>
                    </div>
                    <div className='mt-3 flex justify-around items-center'>
                        <button 
                            className='flex justify-center items-center bg-red-500 rounded-lg p-2'
                            type='button'>
                            Cancel
                        </button>
                        <button 
                            className='flex justify-center items-center bg-green-500 rounded-lg p-2'
                            type='submit'>
                            Add
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

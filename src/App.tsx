import React from 'react';

class App extends React.Component <any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      key: 0,
      task : {
        id: '',
        title: ''
      },
      tasks: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleChange(e: any) {
    e.preventDefault();
    this.setState({
      task: {
        id: this.state.key,
        title: e.target.value
      }
    }) 
  }

  handleClick(e: any) {
    e.preventDefault();
    if(this.state.task.title !== '') {
      this.setState({
        tasks : [...this.state.tasks, this.state.task],
        task: {
          id: '',
          title: ''
        },
        key: this.state.key + 1,
      })
    } 
  }

  render ()  {
    return(
      <div className='flex flex-col justify-center items-center'>
        <div className='bg-blue-500 rounded-xl p-5 flex flex-row' >
          <input className='border border-black p-4' type='text' value={ this.state.task.title } onChange={ this.handleChange } name='task' placeholder='Add task here' />
          <button className='border border-white text-white bg-green-600 ml-4 p-4 font-bold rounded-full' type='button' onClick={ this.handleClick }>Add</button>
        </div>
        <div className='flex flex-col justify-start items-start border border-black rounded-xl p-5 mt-4 box-border'>
          <ul className='w-96 overflow-auto'>
            {this.state.tasks.map((task: any) => {
              return <li className='border box-border p-2 border-black rounded' key={ task.id }>{ task.title }</li>
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default App;

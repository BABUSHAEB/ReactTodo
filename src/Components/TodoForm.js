import React, { useState } from 'react'
import ShowTodo from './ShowTodo'
import '../App.css'

function Todo() {

    const [task, setTask] = useState("add some task");
    const [data, setData] = useState([]);
    const [filtered, setFiltered] = useState([]);


    const onChangeHandler = (e) => {
        setTask(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if(task !== ''){
            const newData = task;
            setData([...data, { text: newData, status: "Pending", bgColor: "btn-warning" , id:data.length}])
            setTask('')
            setFiltered([]);
        } else {
            alert("Please,Enter Task!")
        }

    }

    const changeBgColor = (a,b) => {
        let changedData = data;
        console.log(b);

        if (data[a].status === "Pending") {
            changedData[a].status = "Completed";
            changedData[a].bgColor = "btn-primary";
            setData([...changedData]);
        }
        else if (data[a].status === "Completed") {
            changedData[a].status = "Pending";
            changedData[a].bgColor = "btn-warning";
            setData([...changedData]);
        }


    }
    const searchHandler = (e) => {
        e.preventDefault();
        const filtered = data.filter(obj => {
            // return obj.text === task;
            let Compare = obj.text;
            return Compare.toLowerCase().match(task.toLowerCase());
        });
        console.log(filtered)
        setFiltered([...filtered]);



    }
    const dropDownHandle = (e) => {
        const filtered = data.filter(obj => {
            return obj.status === e.target.value;
        });
        console.log(filtered)
        setFiltered(filtered);
    }

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center main-row">
                <div className="col shadow main-col bg-white">
                    <div className="row bg-primary text-white">
                        <div className="col  p-2">
                            <h4 className='text-center'>Todo List</h4>
                        </div>
                    </div>
                    <form >
                        <div className="row justify-content-between text-white p-2">
                            <div className="form-group flex-fill mb-2 col-6">
                                <input id="todo-input" type="text" className="form-control" value={task} onChange={onChangeHandler} />
                            </div>
                            <button type="submit" className="btn btn-primary mb-2 mx-2 col-3" onClick={submitHandler}>Add Todo</button>
                            <button type="submit" className="btn btn-primary mb-2  ml-2 col-2" onClick={searchHandler}>Search</button>
                            <select className='form-control'  onChange={dropDownHandle}>
                                <option value="None">--None--</option>
                                <option value="Pending">Pending</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>
                    </form>
                    {/* search data */}
                    {filtered.map((value, index) => {
                        return <ShowTodo
                            key={index}
                            id={value.id}
                            task={value.text}
                            onSelcet={changeBgColor}
                            Status={value.status}
                            BgColor={value.bgColor}
                        />
                    })}
                    {filtered.length === 0 && data.map((value, index) => {
                        return <ShowTodo
                            key={index}
                            id={index}
                            task={value.text}
                            onSelcet={changeBgColor}
                            Status={value.status}
                            BgColor={value.bgColor}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Todo
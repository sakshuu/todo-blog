import React, { useEffect , useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import todoSlice, { addTodo, getAllTodos } from '../redux/todoSlice'

export default function Todo() {
const dispatch = useDispatch()
const [todoData, settodoData] = useState({
  task:"Abhyas",
  desc:"Lern react",
  priority: "low"
})

const{todos} = useSelector(state => state.alltodos)
const handlesubmit = () => {
  dispatch(addTodo(todoData)) 
}

useEffect(() => {
  const promise = dispatch(getAllTodos())
  return () => promise.abort()
}, [])

  return (<>
      <div class="container">
        <div class="row">
          <div class="col-sm-6 offset-sm-3">
            <div class="card">
              <div class="card-header">Todo</div>
              <div class="card-body">
                <div>
                  <label for="task" class="form-label">First task</label>
                  <input
                    type="text"
                    name='task'
                    class="form-control" 
                    id="task"
                    placeholder="Enter Your task"
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please add task.</div>
                </div>
                <div class="mt-2">
                  <label for="desc" class="form-label">Description</label>
                  <input
                    type="text"
                    name='desc'
                    class="form-control"
                    id="desc"
                    placeholder="Enter task description"
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please add description</div>
                </div>
                <div class="mt-2">
                  <label for="priority"> Priority</label>
                  <select class="form-select" id="priority">
                    <option selected>Select Priority</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
                <button type="button" onClick={handlesubmit}  class="btn btn-primary w-100 mt-3">
                  Add Todo
                </button>
              </div>
            </div>
        {todos.map(item => <div key={item.id}>
        
            <div class="card mt-4">
              <div
                class="card-header d-flex justify-content-between"
                data-bs-toggle="collapse"
                data-bs-target="#task1"
              >
              {item.task}
                <div>
                  <button
                    type="button"
                    class="btn btn-sm btn-warning"
                    data-bs-target="#editModal"
                    data-bs-toggle="modal">edit</button>

                  <button
                    type="button"
                    class="btn btn-sm btn-danger"
                    data-bs-target="#deleteModal"
                    data-bs-toggle="modal">delete</button>
                    
                </div>
              </div>
              <div class="collapse" id="task1">
                <div class="card-body">{item.desc}</div>
              </div>
            <div/>
            </div>
          </div>)
}
        </div>
      </div>
      </div>
    

      <div class="modal fade" id="editModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editModal">Edit Todo</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div>
                <label for="mtask" class="form-label">First task</label>
                <input
                  type="text"
                  class="form-control"
                  id="mtask"
                  placeholder="Enter Your task"
                />
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">Please add task.</div>
              </div>
              <div class="mt-2">
                <label for="mdesc" class="form-label">Description</label>
                <input
                  type="text"
                  class="form-control"
                  id="mdesc"
                  placeholder="Enter task description"
                />
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">Please add description</div>
              </div>
              <div class="mt-2">
                <label for="mpriority"> Priority</label>
                <select class="form-select" id="mpriority">
                  <option selected>Select Priority</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
              <button type="button" class="btn btn-primary w-100 mt-3">
                Update Todo
              </button>
              <button
                type="button"
                class="btn mt-2 w-100 btn-outline-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="deleteModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-danger">
                Are you sure you want delete this todo ?
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body text-danger">
              <p class="text-center text-muted mb-5">
                You can delete this todo at any time. If you change your mind, you
                might not be able to recover it
              </p>
              <div class="btn-group w-100">
                <button type="button" class="btn btn-outline-danger">Yes</button>
                <button type="button" class="btn btn-success">NO</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
  </>
  )
}

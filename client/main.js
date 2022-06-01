const fetchButton = document.querySelector('#fetch-list-button');

fetchButton.addEventListener('click', () => {
    axios.get('http://localhost:4000/api/goals')
    .then(appendGoals)
    .catch((err) => {
      console.log(err)
    })
})

//Compliment button
const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

//Fortune button
const fortuneBtn = document.getElementById("fortuneButton");

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
    })
}

fortuneBtn.addEventListener('click', getFortune);

//Goal input
const goalInput = document.getElementById("add-goal-button");

const postGoal = () => {
    const goal = document.querySelector('input');
    axios.post("http://localhost:4000/api/goals", { goal: goal.value })
    .then(res => {
        appendGoals(res)
        goal.value = '';
    })
    .catch((err) => {
        console.log(err);
    })
}

goalInput.addEventListener('click', postGoal);


const appendGoals = ({ data }) => {
    const goalContainer = document.getElementById('goal-list');
    goalContainer.innerHTML = '';
    data.forEach(({text, id}) => {
      const goal = document.createElement('li');
      const goalText = document.createElement('span');
      const deleteButton = handleDeleteButton(id);
      const editButton = handleEditButton(id);
      goalText.innerText = text
      goal.append(goalText, deleteButton, editButton)
      goalContainer.appendChild(goal); 
    })
}

const handleDeleteButton = (id) => {
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', () => {
        axios.delete(`http://localhost:4000/api/goals/${id}`)
        .then(appendGoals)
        .catch((err) => {
            console.log(err)
        })
    })
    return deleteButton;
}

const handleEditButton = (id) => {
    const editButton = document.createElement('button');
    editButton.innerText = "Edit";
    editButton.addEventListener('click', () => {
      const editInput = document.createElement('input');
      const sendEditButton = document.createElement('button');
      sendEditButton.innerText = "Send Edit!"
      sendEditButton.addEventListener('click', () => {
        const body = {
          id,
          text: editInput.value,
        }
        axios.put('http://localhost:4000/api/goals', body)
        .then(appendGoals)
        .catch((err) => {
          console.log(err)
        })
      })
      document.body.append(editInput, sendEditButton);
    })
    return editButton;
  }
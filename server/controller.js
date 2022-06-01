module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["Happiness will bring you good luck.", "Imagination rules the world.", "Practice makes perfect.", "Welcome change.", "Good news will come to you by mail."];

        let fortuneIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[fortuneIndex];

        res.status(200).send(randomFortune);
    },

    getGoals: (req, res) => {
        res.status(200).send(myGoals);
    },

    postGoals: (req, res) => {
        const { goal } = req.body;
        myGoals.push({id , text: goal})
        res.status(200).send(myGoals);
        id++;
    },

    deleteGoals: (req, res) => {
        const { id } = req.params;
        const deleteIndex = myGoals.findIndex((goal) => +goal.id === +id)
        myGoals.splice(deleteIndex, 1);
        res.status(200).send(myGoals);
    },

    editGoals: (req, res) => {
        const { id, text } = req.body;
        const editIndex = myGoals.findIndex((goal) => +goal.id === +id)
        myGoals[editIndex].text = text;
        res.status(200).send(myGoals);
    }

}

let id = 5;
const myGoals = [
  {id: 1, text: 'do laundry'},
  {id: 2, text: 'feed cats'},
  {id: 3, text: 'get gas'},
  {id: 4, text: 'work out'},
]
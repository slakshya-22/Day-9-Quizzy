const fetchQuestions = async () => {
    try {
        const res = await fetch('https://opentdb.com/api.php?amount=10&type=multiple');
        
        if (!res.ok) {
            throw new Error(`HTTP Error! Status: ${res.status}`);
        }

        const data = await res.json();

        if (!data.results || data.results.length === 0) {
            console.error("No questions received from API.");
            return [];
        }

        return data.results.map((ques) => ({
            question: ques.question,
            options: [...ques.incorrect_answers, ques.correct_answer].slice().sort(() => Math.random() - 0.5),
            corrAns: ques.correct_answer, 
        }));
    } catch (error) {
        console.error("Error fetching questions:", error);
        return []; 
    }
};

export default fetchQuestions;

import './App.css';
import Greeting from "./Greeting.jsx";
import UserCard from "./UserCard.jsx";
import TaskList from "./TaskList.jsx";
import Counter from "./Counter.jsx";
import RegistrationForm from "./RegistrationForm.jsx";
import ColorPicker from "./ColorPicker.jsx";
import WindowSizeTracker from "./21/WindowSizeTracker.jsx";
import UserProfile from "./21/UserProfile.jsx";
import ContactForm from "./21/ContactForm.jsx";

function App() {
    return (
            <div className="App">
                <h1>Моё React приложение</h1>

                {/* 19 */}
                <Greeting />

                <UserCard name="Иван" role="Пользователь" avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfVMhpKmVy_-iwfRLAiNiaDslMa-2oEz7KTw&s" isOnline={true}/>

                <TaskList />

                {/* 20 */}
                <Counter />

                <RegistrationForm />

                <ColorPicker />

                {/* 21 */}
                <WindowSizeTracker />

                <UserProfile />

                <ContactForm />
            </div>
    );
}

export default App;
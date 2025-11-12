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
import UserSettings from "./22/UserSettings.jsx";
import SimpleModalExample from "./22/SimpleModalExample.jsx";
import ProgressDashboard from "./22/ProgressDashboard.jsx";
import QuickActions from "./22/QuickActions.jsx";
import useTechnologies from "./22/useTechnologies.js";

function App() {
    const { technologies, markAllCompleted, resetAll } = useTechnologies();

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

                {/* 22 */}
                <UserSettings />

                <SimpleModalExample />

                <ProgressDashboard />

                <QuickActions 
                    onMarkAllCompleted={markAllCompleted}
                    onResetAll={resetAll}
                    technologies={technologies}
                />
            </div>
    );
}

export default App;
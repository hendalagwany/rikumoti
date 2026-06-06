import VoiceCard from "../components/ui/VoiceCard";
import { voiceActingProjects } from "../data/voiceActing";

function VoiceActing() {
    return (
        <section className="page voive-acting-page">
            <div className="container">
                <h1 className="section-title">Voice Acting </h1>

            <div className="voice-grid">
                {voiceActingProjects.map((project) => (
                    <VoiceCard
                    key={project.id}
                    project={project}
                    />
                ))}
            </div>
            </div>
        </section>
    );
}

export default VoiceActing;
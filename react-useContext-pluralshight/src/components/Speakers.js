import SpeakerToolbar from './SpearkerToolbar';
import SpeakersList from './SpeakersList';
import { SpeakerFilterProvider } from '../contexts/SpeakerFilterContext';

function Speakers() {



    return (
        <SpeakerFilterProvider startingShowSessions={false}>
            <SpeakerToolbar />
            <SpeakersList />
        </SpeakerFilterProvider>
    )
}

export default Speakers;
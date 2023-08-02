import ImageSkeleton from 'src/components/Generic/ImageSkeleton';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';

export default function LoadImage() {
    const listProjects = [{},{},{}]

  return (
        listProjects.map((e, index) => {
            return(
                <div key={uuidv4()} className={`${parseInt(index) === 1 && `flex items-center`}`}>
                    { parseInt(index) === 0 && <Header /> }
                    <ImageSkeleton index={index}/>
                </div>
            )
        })
    )
}

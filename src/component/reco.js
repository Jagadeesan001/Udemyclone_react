import one from '../image/html.jpg'
import two from '../image/javascript.jpg'
import three from '../image/excel.jpg'
import four from '../image/uiandux.jpg'

function Recomented()
{
    return(
        <div class="recommended">
        <h1 class="recommended__title">Recommended for you</h1>
        <p>Pick The best fit</p>
        <div class="recommended__container">
            <div class="course-card">
                <img src={one} alt=""/>
                <p>HTML</p>
                <p>4.2 ⭐⭐⭐⭐</p>
                <p>250<del>658</del></p>
            </div>
            <div class="course-card">
                <img src={two} alt=""/>
                <p>JavaScript</p>
                <p>5.0 ⭐⭐⭐⭐⭐</p>
                <p>859 <del>1988</del></p>
            </div>
            <div class="course-card">
                <img src={three} height="165px" alt=""/>
                <p>Excel</p>
                <p>4.1 ⭐⭐⭐⭐</p>
                <p>245 <del>459</del></p>
            </div>
            <div class="course-card">
                <img src={four} alt=""/>
                <p>UI & UX</p>
                <p>4.7 ⭐⭐⭐⭐</p>
                <p>580 <del>1999</del></p>
            </div>

        </div>
    </div>
    )
}

export default Recomented
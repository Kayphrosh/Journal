import React from 'react'
import './editorial.css'

const Editors = () => {

    const editors = [
        {
            editorName: "Dr Iheanyi Nwankwo",
            editorTitle: 'Associate Professor',
            editorSchool: 'University of Nnsukka, Nigeria',
            editorDepartment: 'Department of Law',
            editorCountry: 'Enugun, Nigeria'
        },
        {
            editorName: "Dr Iheanyi Nwankwo",
            editorTitle: 'Associate Professor',
            editorSchool: 'University of Nnsukka, Nigeria',
            editorDepartment: 'Department of Law',
            editorCountry: 'Enugun, Nigeria'
        },
        {
            editorName: "Dr Iheanyi Nwankwo",
            editorTitle: 'Associate Professor',
            editorSchool: 'University of Nnsukka, Nigeria',
            editorDepartment: 'Department of Law',
            editorCountry: 'Enugun, Nigeria'
        },

        {
            editorName: "Dr Iheanyi Nwankwo",
            editorTitle: 'Associate Professor',
            editorSchool: 'University of Nnsukka, Nigeria',
            editorDepartment: 'Department of Law',
            editorCountry: 'Enugun, Nigeria'
        },

        {
            editorName: "Dr Iheanyi Nwankwo",
            editorTitle: 'Associate Professor',
            editorSchool: 'University of Nnsukka, Nigeria',
            editorDepartment: 'Department of Law',
            editorCountry: 'Enugun, Nigeria'
        },

        {
            editorName: "Dr Iheanyi Nwankwo",
            editorTitle: 'Associate Professor',
            editorSchool: 'University of Nnsukka, Nigeria',
            editorDepartment: 'Department of Law',
            editorCountry: 'Enugun, Nigeria'
        }
    ]


  return (
    <section className='editors-container'>
        <main className='editors'>
            {editors.map((editor, idx) => {
                return (
                    <div className='editor' key={idx}>
                        <h6>{editor.editorName}</h6>
                        <p>{editor.editorTitle}</p>
                        <p>{editor.editorSchool}</p>
                        <p>{editor.editorDepartment}</p>
                        <p>{editor.editorCountry}</p>
                    </div>
                )
            })}
        </main>
    </section>
  )
}


export default Editors
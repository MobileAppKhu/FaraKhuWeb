import { useState } from 'react'
import { Box, Button, IconButton, TextField, Typography } from '@mui/material'
import PriorityHighIcon from '@mui/icons-material/PriorityHigh'

import { Add } from '@mui/icons-material'
import KhuContainer from '../../../../components/KhuContainer'

import { getTranslate } from '../../../../localization'
import useStyle from './AddStudents.style'
import KhuModal from '../../../../components/KhuModal'

interface GuideBtnProps {
  className?: string
  hidden?: boolean
}

const GuideBtn = ({ className, hidden }: GuideBtnProps) => (
  <IconButton
    className={`guideBtn${hidden ? ' hidden' : ''} ${className || ''}`}
    aria-hidden={hidden}
    size="small"
    disableRipple
  >
    <PriorityHighIcon fontSize="small" />
  </IconButton>
)

const AddStudents = () => {
  const classes = useStyle()

  const [students, setStudents] = useState<string[]>([])
  const [studentID, setStudentID] = useState('')

  const [openSuccessModal, setOpenSuccessModal] = useState(false)
  const [loading, setloading] = useState(false)

  return (
    <div className={classes.background}>
      <KhuContainer>
        <Box className="container">
          <div className="top">
            <Typography
              variant="h3"
              component="h2"
              color="black"
              className="modalTitle"
            >
              {getTranslate('ایجاد درس جدید - اضافه کردن دانشجو')}
            </Typography>
          </div>
          <div className="bottom">
            <div className="addStudentContainer">
              <div className="right">
                <span>{getTranslate('شماره دانشجویی')}</span>
                <TextField
                  className="studentIdInput"
                  value={studentID}
                  placeholder="مثال: 982023031"
                  onChange={(e) => setStudentID(e.target.value)}
                />
                <IconButton
                  className="addIcon"
                  disableRipple
                  onClick={() => {
                    if (studentID) {
                      setStudents([...students, studentID])
                      setStudentID('')
                    }
                  }}
                >
                  <Add />
                </IconButton>
              </div>
              <div className="left" />
            </div>
            <div className="studentList">
              <table>
                <thead>
                  <tr>
                    <th>{getTranslate('ردیف')}</th>
                    <th>{getTranslate('نام خانوادگی')}</th>
                    <th>{getTranslate('نام')}</th>
                    <th>{getTranslate('شماره دانشجویی')}</th>
                    <th>{getTranslate('ایمیل')}</th>
                    <th>{getTranslate('')}</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student, index) => (
                    <tr key={student}>
                      <td>{index + 1}</td>
                      <td> </td>
                      <td> </td>
                      <td>{student}</td>
                      <td> </td>
                      <td>
                        <Button
                          className="deleteStudentBtn"
                          variant="contained"
                          disableElevation
                          onClick={() => {
                            setStudents(students.filter((s) => s !== student))
                          }}
                        >
                          {getTranslate('حذف')}
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="confirmBtn">
              <Button variant="contained" size="large" disabled={loading}>
                {getTranslate('تایید')}
              </Button>
            </div>
          </div>
        </Box>
      </KhuContainer>
      <KhuModal
        title="درس مورد نظر با موفقیت ایجاد شد."
        buttons={[
          {
            buttonText: 'باشه',
            textColor: 'primary.main',
            bgColor: 'transparent',
            onClick: () => {
              setOpenSuccessModal(false)
            },
          },
        ]}
        open={openSuccessModal}
        handleClose={() => setOpenSuccessModal(false)}
      />
    </div>
  )
}

export default AddStudents

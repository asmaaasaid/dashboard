import { useState } from "react";
import FullCalendar  from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 
import interactionPlugin from "@fullcalendar/interaction"
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list' 
import { formatDate } from "@fullcalendar/core/index.js";
import {
    Box,
    List,
    ListItem,
    ListItemText,
    Typography,
    useTheme
} from '@mui/material'
import Header from "../../components/Header"
import { tokens } from "../../theme";

const Calendar = ()=>{

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvent , setCurrentEvent] = useState([]);

    const handleDateClick = (selected)=>{
        const title = prompt('please enter a new title for your event');
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if(title){
            calendarApi.addEvent({
                id:`${selected.dateStr}-${title}`,
                title,
                start:selected.startStr,
                end:selected.endStr,
                allDay:selected.allDay
            })
        }
    };

    const handleEventClick = (selected) => {
      if (
        window.confirm(
          `are you sure you want to delete the event ${selected.event.title}`
        )
      ) {
        selected.event.remove();
      }
    };

    return(
        <Box mt='20px'>
            <Header title='calendar' subtitle='full calendar interactive page'/>

            <Box display='flex' justifyContent='space-between' mt='25px' >
                {/* calendar sidebar */}
                <Box 
                flex='1 1 20%'
                backgroundColor={colors.primary[400]}
                p='15px'
                borderRadius='4px'
                 >
                    <Typography sx={{textTransform:'capitalize'}} variant="h5">events</Typography>
                    <List>
                        {currentEvent.map((event)=>{
                           return(
                             <ListItem
                            key={event.id}
                            sx={{backgroundColor:colors.greenAccent[400],
                                margin:'10px 0px',
                                borderRadius:'2px',
                                color:'whitesmoke',
                                textTransform:'capitalize'
                            }}
                            >
                                <ListItemText 
                                primary={event.title}
                                secondary={
                                    <Typography>
                                        {formatDate(event.start, {
                                            year:"numeric",
                                            month:'short',
                                            day:'numeric'
                                        })}
                                    </Typography>
                                }
                                />

                             

                            </ListItem>
                           )
                        })}
                    </List>
                 </Box>

                 {/* calendar */}
                 <Box flex='1 1 100%' ml='15px'>
                    <FullCalendar
                    height='75vh'
                    plugins={[
                        dayGridPlugin,
                        timeGridPlugin,
                        interactionPlugin,
                        listPlugin
                    ]}

                    headerToolbar={{
                        left: "prev,next today",
                        center:"title",
                        right:"dayGridMonth timeGridWeek timeGridDay listMonth",
                    }}
                    initialView="dayGridMonth"
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    select={handleDateClick}
                    eventClick={handleEventClick}
                    eventsSet={(events)=> setCurrentEvent(events)}
                    initialEvents={[
                        {id:'1234' , title:'all-day event' , start:"2025-10-25"},
                        {id:'4321' , title:'timed event' , start:"2025-10-28"}
                    ]}
                    />

                 </Box>
            </Box>
        </Box>
    )
}
export default Calendar
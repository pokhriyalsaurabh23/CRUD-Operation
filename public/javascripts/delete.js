$(document).ready(()=>{
    $('.delete-user').on('click',function(){
         const userId = this.id;
        // var userId = $(this).attr("id")
        console.log(userId);
        $.ajax({
            type:'delete',
            url:'/delete/'+userId,
            success: (res)=>{
             alert(`${res.name} is delete successfully`);
             window.location.href='/';
            }
     
        })
     });
})

<!-- Страница авторизации полизователя.
     Валидация формы осуществляется с помощью 
     пакета validate
     ( установка: npm install vuelidate --save-- ) -->

<template>
<div> 
  <h2 class="form-header"> Введите ваши данные для авторизации: </h2>
  


 <v-form 
 @submit.prevent="onSubmit"
 name="form"
 action="#"
 method="post"
 enctype="multipart/form-data"
    >
        <fieldset>
            <div class=form-wrapper>
             <div class="form-line">
                <label for="login">Ваше имя:</label>
           <!-- Вызов собственного валидатора  login при потере фокуса
         (  @blur="$v.login.$touch()")
         -->             
               
                <input 
                id="login"
                type="text"
                name="login"
                :class="{'is-invalid': $v.login.$error}"
                @blur="$v.login.$touch()"
                v-model="login"
                 />
            </div>
            <div class="form-line">
                <label for="email">Ваш email:</label>
         <!-- Вызов собственного валидатора  email при потере фокуса
         (  @blur="$v.email.$touch()")
         -->     
          <input
          type="email"
          id="email"
          :class="{'is-invalid': $v.email.$error}"
          @blur="$v.email.$touch()"
          v-model="email"
          name="e-mail" 
        >
            </div>
        <div class="invalid-feedback" v-if="!$v.email.required">Email field is required</div>
        <div class="invalid-feedback" v-if="!$v.email.email">This field should be an email</div>
        <div class="invalid-feedback" v-if="!$v.email.uniqEmail">This email is test e-mail</div> 
            <div class="form-line">
                <label for="password">Ваш пароль:</label>
                
        <!-- Вызов собственного валидатора  password при потере фокуса
         (  @blur="$v.password.$touch()" )
         -->        

                <input 
                id="password" 
                type="password"
                name="password"
                class="form-control"
                :class="{'is-invalid': $v.password.$error}"
                @blur="$v.password.$touch()"
                v-model="password"
                />
            </div>
            <div class="form-file" >
                <label id="file1-label" for="file">Файл:</label>
                <input id="file1" type="file" name="file" />
            </div>    
            </div>
        </fieldset>
        <div class="reset-submit">
            <input id="reset1" type="reset" value="Сбросить" />
            <!-- Валидация при нажатии кнопочки submit 
            При нажатии на кнопку вызываем метод onSubmit()
            Кнопка отключена пока валидация не прошла 
            -->
            <input
            @click="onSubmit"
            color="primary"
            :disabled="$v.$invalid"
             id="submit1" 
             type="submit" 
             name="submit" 
             value="Отправить" 
             />
        </div>
    </v-form>
     </div> 

  


</template>

<script>
// импортируем валидаторы стандартные, на их основе 
// делаем собственные валидаторы в validations:
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
    data () {
    return {
      email: '',
      password: '',
      login:''
    }
  },
  methods: {
    onSubmit () {
     // Добавление данных в локальное хранилище localStorage
     // В окне консоли- вкладка Applications (или Resources)
     // Там можно увидеть сохраненные данные через localStorage
     localStorage.setItem("login", this.login);
     localStorage.setItem("password", this.password);
     localStorage.setItem("email", this.email);
    }
  },
  validations: {
    email: {
      required,
      email,      
      uniqEmail: function(newEmail) {
        if (newEmail === '') return true
        return newEmail !=='test@mail.ru'

      }
    },
    password: {
      minLength: minLength(8)
    },
    login: {
      minLength: minLength(3),
      maxLength: maxLength(15)
    }
  }

}

</script>

<style lang="scss">

$color-header : #42b983;
$margin-10: 10px;
$margin-50: 50px; 

.form-header { 
color: $color-header;
text-align:center;
}

body{
background-image: url(bg-01.jpg);
background-size: 100%; 
}



.form-wrapper {
     width: 300px;
     margin: 20px auto;
     font-size: 16px;
}


.form-line {
   margin-top: $margin-10;
   display: flex;
   justify-content: space-between;
}

.form-file {
   margin-top: $margin-50;
   display: flex;
   justify-content: space-between;
}

.reset-submit{
   /* по центру */ 
   margin-top: $margin-10 ;
   display: flex;
   justify-content: center;
}


#reset1{
margin-right:$margin-10;
}

#file1{
   margin-left: 20px; 
}

// При ошибочном e-mail-
// выделить его цветом
.is-invalid{
    color: red;
}

// Сообщение об ошибочном e-mail
.invalid-feedback{
    color:darkgreen
}

</style>






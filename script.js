

// bicicleta***************************************************************************************//
function getClientsBikes() {
  $('#resultado_bicileta').show();
  $.ajax({
    url: "https://gdbed69c81f5be5-bdretos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike",
    data: null,
    type: "GET", //POST, PUT, DELETE
    dataType: 'json',
    success: function (data) {
      console.log(data);
      consultarRespuestaBikes(data.items);
    }
  })
}

function llenarCamposBikes(id) {
  $('#tabla_actualizar_bike').show();
  $('#tabla_registrar_bike').hide();
  $.ajax(
    {
      url: 'https://gdbed69c81f5be5-bdretos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike/' + id,
      type: 'GET',
      dataType: 'json',

      success: function (json) {
        console.log(json);
        $("#idac").val(json.items[0]["id"]);
        $("#brandac").val(json.items[0]["brand"]);
        $("#modelac").val(json.items[0]["model"]);
        $("#category_idac").val(json.items[0]["category_id"]);
        $("#nameac").val(json.items[0]["name"]);
      }

    }

  );
}

idrg

function formRegistroBikes() {
  $('#tabla_registrar_bike').show();
  $('#tabla_actualizar_bike').hide();
}



function consultarRespuestaBikes(items) {

  let myTable = "<table>";
  for (i = 0; i < items.length; i++) {

    myTable += "<tr>";
    myTable += "<td>" + items[i].id + "</td>";
    myTable += "<td>" + items[i].brand + "</td>";
    myTable += "<td>" + items[i].model + "</td>";
    myTable += "<td>" + items[i].category_id + "</td>";
    myTable += "<td>" + items[i].name + "</td>";
    myTable += "<td> <button onclick='borrarClientsBikes(" + items[i].id + ")'>Borrar </button>";
    myTable += "<td> <button onclick='llenarCamposBikes(" + items[i].id + ")'>Detalle </button>";
    myTable += "</tr>";

  }
  myTable += "</table>";
  $("#resultado_bicileta").append(myTable)


}


function guardarClientsBikes() {
  let myData = {
    id: $("#idrgb").val(),
    brand: $("#brandrgb").val(),
    model: $("#modelrgb").val(),
    category_id: $("#category_idrgb").val(),
    name: $("#namergb").val(),
  };
  let dataToSend = JSON.stringify(myData);
  $.ajax({
    url: "https://gdbed69c81f5be5-bdretos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike",
    type: "POST",
    data: myData,
    datatype: "JSON",
    success: function (data) {
      $("#resultado_bicileta").empty();
      $("#idrgb").val("");
      $("#brandrgb").val("");
      $("#modelrgb").val("");
      $("#category_idrgb").val("");
      $("#namergrgb").val("");
      getClientsBikes();
      alert("se ha guardado el dato")
    }
  });
}



function actualizarClientsBikes() {
  let myData = {
    id: $("#idac").val(),
    brand: $("#brandac").val(),
    model: $("#modelac").val(),
    category_id: $("#category_idac").val(),
    name: $("#nameac").val(),

  };
  console.log(myData);
  let dataToSend = JSON.stringify(myData);
  $.ajax({
    url: "https://gdbed69c81f5be5-bdretos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike",
    type: "PUT",
    data: dataToSend,
    contentType: "application/JSON",
    datatype: "JSON",
    success: function (data) {
      $("#resultado_bicileta").empty();
      $("#idac").val("");
      $("#brandac").val("");
      $("#modelac").val("");
      $("#category_idac").val("");
      $("#nameac").val("");
      getClientsBikes();
      alert("se ha Actualizado")
    }
  });
}

function borrarClientsBikes(idElemento) {
  let myData = {
    id: idElemento
  };
  let dataToSend = JSON.stringify(myData);
  $.ajax({
    url: "https://gdbed69c81f5be5-bdretos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike",
    type: "DELETE",
    data: dataToSend,
    contentType: "application/JSON",
    datatype: "JSON",
    success: function (data) {
      $("#resultado_bicileta").empty();
      getClientsBikes();
      alert("Se ha Eliminado.")
    }
  });
}






// cliente***************************************************************************************//
function getClients() {
  $('#resultado').show();
  $.ajax({
    url: "https://gdbed69c81f5be5-bdretos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
    data: null,
    type: "GET", //POST, PUT, DELETE
    dataType: 'json',
    success: function (data) {
      console.log(data);
      consultarRespuesta(data.items);
    }
  })
}

function llenarCampos(id) {
  $('#tabla_actualizar').show();
  $('#tabla_registrar').hide();
  $.ajax(
    {
      url: 'https://gdbed69c81f5be5-bdretos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client/' + id,
      type: 'GET',
      dataType: 'json',

      success: function (json) {
        console.log(json);
        $("#id").val(json.items[0]["id"]);
        $("#name").val(json.items[0]["name"]);
        $("#email").val(json.items[0]["email"]);
        $("#age").val(json.items[0]["age"]);

      }

    }

  );
}



function formRegistro() {
  $('#tabla_registrar').show();
  $('#tabla_actualizar').hide();
}



function consultarRespuesta(items) {

  let myTable = "<table>";
  for (i = 0; i < items.length; i++) {

    myTable += "<tr>";
    myTable += "<td>" + items[i].id + "</td>";
    myTable += "<td>" + items[i].name + "</td>";
    myTable += "<td>" + items[i].email + "</td>";
    myTable += "<td>" + items[i].age + "</td>";
    myTable += "<td> <button onclick='borrarClients(" + items[i].id + ")'>Borrar </button>";
    myTable += "<td> <button onclick='llenarCampos(" + items[i].id + ")'>Detalle </button>";
    myTable += "</tr>";

  }
  myTable += "</table>";
  $("#resultado").append(myTable)


}


function guardarClients() {
  let myData = {
    id: $("#idrg").val(),
    name: $("#namerg").val(),
    email: $("#emailrg").val(),
    age: $("#agerg").val(),
  };
  let dataToSend = JSON.stringify(myData);
  $.ajax({
    url: "https://gdbed69c81f5be5-bdretos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
    type: "POST",
    data: myData,
    datatype: "JSON",
    success: function (data) {
      $("#resultado").empty();
      $("#idrg").val("");
      $("#namerg").val("");
      $("#emailrg").val("");
      $("#agerg").val("");
      getClients();
      alert("se ha guardado el dato")
    }
  });
}



function actualizarClients() {
  let myData = {
    id: $("#id").val(),
    name: $("#name").val(),
    email: $("#email").val(),
    age: $("#age").val(),

  };
  console.log(myData);
  let dataToSend = JSON.stringify(myData);
  $.ajax({
    url: "https://gdbed69c81f5be5-bdretos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
    type: "PUT",
    data: dataToSend,
    contentType: "application/JSON",
    datatype: "JSON",
    success: function (data) {
      $("#resultado").empty();
      $("#id").val("");
      $("#name").val("");
      $("#email").val("");
      $("#age").val("");
      getClients();
      alert("se ha Actualizado")
    }
  });
}

function borrarClients(idElemento) {
  let myData = {
    id: idElemento
  };
  let dataToSend = JSON.stringify(myData);
  $.ajax({
    url: "https://gdbed69c81f5be5-bdretos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
    type: "DELETE",
    data: dataToSend,
    contentType: "application/JSON",
    datatype: "JSON",
    success: function (data) {
      $("#resultado").empty();
      getClients();
      alert("Se ha Eliminado.")
    }
  });
}



// mensaje***************************************************************************************//


function getClientsMensajes() {
  $('#resultado_Mensajes').show();
  $.ajax({
    url: "https://gdbed69c81f5be5-bdretos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
    data: null,
    type: "GET", //POST, PUT, DELETE
    dataType: 'json',
    success: function (data) {
      console.log(data);
      consultarRespuestaMensajes(data.items);
    }
  })
}

function llenarCamposMensajes(id) {
  $('#tabla_actualizar_Mensajes').show();
  $('#tabla_registrar_Mensajes').hide();
  $.ajax(
    {
      url: 'https://gdbed69c81f5be5-bdretos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message/' + id,
      type: 'GET',
      dataType: 'json',

      success: function (json) {
        console.log(json);
        $("#idacm").val(json.items[0]["id"]);
        $("#messagetextacm").val(json.items[0]["messagetext"]);
      }

    }

  );
}


function formRegistroMensajes() {
  $('#tabla_registrar_Mensajes').show();
  $('#tabla_actualizar_Mensajes').hide();
}



function consultarRespuestaMensajes(items) {

  let myTable = "<table>";
  for (i = 0; i < items.length; i++) {

    myTable += "<tr>";
    myTable += "<td>" + items[i].id + "</td>";
    myTable += "<td>" + items[i].messagetext + "</td>";
    myTable += "<td> <button onclick='borrarClientsMensajes(" + items[i].id + ")'>Borrar </button>";
    myTable += "<td> <button onclick='llenarCamposMensajes(" + items[i].id + ")'>Detalle </button>";
    myTable += "</tr>";
  }
  myTable += "</table>";
  $("#resultado_Mensajes").append(myTable)


}


function guardarClientsMensajes() {
  let myData = {
    id: $("#idrgm").val(),
    messagetext: $("#messagetextrgm").val(),
  };
  let dataToSend = JSON.stringify(myData);
  $.ajax({
    url: "https://gdbed69c81f5be5-bdretos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
    type: "POST",
    data: myData,
    datatype: "JSON",
    success: function (data) {
      $("#resultado_Mensajes").empty();
      $("#idrgm").val("");
      $("#messagetextrgm").val("");

      getClientsMensajes();
      alert("se ha guardado el dato")
    }
  });
}



function actualizarClientsMensajes() {
  let myData = {
    id: $("#idacm").val(),
    messagetext: $("#messagetextacm").val(),

  };
  console.log(myData);
  let dataToSend = JSON.stringify(myData);
  $.ajax({
    url: "https://gdbed69c81f5be5-bdretos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
    type: "PUT",
    data: dataToSend,
    contentType: "application/JSON",
    datatype: "JSON",
    success: function (data) {
      $("#resultado_Mensajes").empty();
      $("#idacm").val("");
      $("#messagetextacm").val("");
      getClientsMensajes();
      alert("se ha Actualizado")
    }
  });
}

function borrarClientsMensajes(idElemento) {
  let myData = {
    id: idElemento
  };
  let dataToSend = JSON.stringify(myData);
  $.ajax({
    url: "https://gdbed69c81f5be5-bdretos.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
    type: "DELETE",
    data: dataToSend,
    contentType: "application/JSON",
    datatype: "JSON",
    success: function (data) {
      $("#resultado_Mensajes").empty();
      getClientsMensajes();
      alert("Se ha Eliminado.")
    }
  });
}

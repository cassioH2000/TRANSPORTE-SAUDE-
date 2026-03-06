const express = require('express');
  atendimentolocal,atendimentotipo,atendimentohorario,

  viagemtipo,viagemdata,viagemembarque,viagemveiculo,viagemmotorista,

  motoristacpf,motoristatelefone,motoristacategoria,

  observacao

  )VALUES(

  $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,

  $11,$12,$13,$14,$15,$16,$17,$18,$19,$20

  ) RETURNING *`,

  [

  d.pacienteNome||'',

  d.pacienteDoc||'',

  d.pacienteEndereco||'',

  d.pacienteTelefone||'',

  d.pacienteNecessidades||'',

  d.acompNome||'',

  d.acompDoc||'',

  d.acompTelefone||'',

  d.atendimentoLocal||'',

  d.atendimentoTipo||'',

  d.atendimentoHorario||'',

  d.viagemTipo||'',

  d.viagemData||'',

  d.viagemEmbarque||'',

  d.viagemVeiculo||'',

  d.viagemMotorista||'',

  d.motoristaCpf||'',

  d.motoristaTelefone||'',

  d.motoristaCategoria||'',

  d.observacao||''

  ]);

  res.json(result.rows[0]);

});

app.listen(PORT,()=>{

console.log('Servidor rodando na porta '+PORT);

});
<script>
if({{$result['status']}}){
	 window.parent.registerSuccess();
}else{
	alert('{{ $result['msg'] }}');
}
</script>
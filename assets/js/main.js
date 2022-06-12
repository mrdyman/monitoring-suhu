$(".btn-registrasi").on('click', function(){
	const nama = $("#nama").val();
	const stambuk = $("#stambuk").val();
	const keperluan = $("#keperluan").val();

	if ($('#contactForm').length > 0 ) {
		$( "#contactForm" ).validate( {
			rules: {
				nama: "required",
				stambuk: "required",
				keperluan: {
					required: true,
					minlength: 5
				}
			},
			messages: {
				nama: "Mohon masukkan nama",
				stambuk: "Mohon masukkan stambuk",
				keperluan: "Mohon masukkan keperluan"
			},
			/* submit via ajax */
			submitHandler: function(form) {
				$(".btn-registrasi").val('mohon tunggu...');
				
				$.ajax({   	
					type: "POST",
					url: "http://localhost/monitoring-suhu/registrasi-mahasiswa.php",
					dataType : "JSON",
					data: {
						nama: nama,
						stambuk: stambuk,
						keperluan: keperluan
					},
					success: function(response) {
						if (response.status == 'success') {
							$("#contactForm").hide(500);
							$("#form-message-success").show(1500);
						}else{
							console.log(response);
							alert("Terjadi Kesalahan!!");
							$(".btn-registrasi").val('Registrasi');
						}
					},
					error: function() {
					}
				});
			}
		});
	}
});

$('#example1 tbody').on('click', 'approve', function () {
    var data = table.row($(this).parents('tr')).data();
	var stambuk = data[2];

	$.ajax({
		type: "POST",
		url: "http://localhost/monitoring-suhu/approve-mahasiswa.php",
		dataType : "JSON",
		data: {
			stambuk: stambuk,
			isApproved : 1
		},
		success: function(response) {
			console.log(response);
			alert("Berhasil Disetujui");
			location.reload();
		},
		error : function(req, err){
			console.log('Error'+err);
		}
	});
});

$('#example1 tbody').on('click', 'reject', function () {
    var data = table.row($(this).parents('tr')).data();
	var stambuk = data[2];

	$.ajax({
		type: "POST",
		url: "http://localhost/monitoring-suhu/approve-mahasiswa.php",
		dataType : "JSON",
		data: {
			stambuk: stambuk,
			isApproved : -1
		},
		success: function(response) {
			console.log(response);
			alert("Berhasil Ditolak");
			location.reload();
		},
		error : function(req, err){
			console.log('Error'+err);
		}
	});
});
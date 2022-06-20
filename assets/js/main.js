const baseURL = 'http://localhost/monitoring-suhu/';
$(".btn-registrasi").on('click', function(){
	const nama = $("#nama").val();
	const daftar_sebagai = $("#daftar_sebagai").val();
	const keperluan = $("#keperluan").val();

	if ($('#contactForm').length > 0 ) {
		$( "#contactForm" ).validate( {
			rules: {
				nama: "required",
				daftar_sebagai: {
					required: true,
				},
				keperluan: {
					required: true,
					minlength: 5
				}
			},
			messages: {
				nama: "Mohon masukkan nama",
				daftar_sebagai: "Wajib diisi",
				keperluan: "Mohon masukkan keperluan"
			},
			/* submit via ajax */
			submitHandler: function(form) {
				$(".btn-registrasi").val('mohon tunggu...');
				
				$.ajax({   	
					type: "POST",
					url: baseURL+"registrasi-mahasiswa.php",
					dataType : "JSON",
					data: {
						nama: nama,
						daftar_sebagai: daftar_sebagai,
						keperluan: keperluan
					},
					success: function(response) {
						if (response.status == 'success') {
							$("#contactForm").hide(500);
							$("#form-message-success").show(1500);
							updateScanStatus();
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
	var id = data[0];

	$.ajax({
		type: "POST",
		url: baseURL+"approve-mahasiswa.php",
		dataType : "JSON",
		data: {
			id: id,
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
	var id = data[0];

	$.ajax({
		type: "POST",
		url: baseURL+"approve-mahasiswa.php",
		dataType : "JSON",
		data: {
			id: id,
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

function updateScanStatus(){
	$.ajax({
		type: "GET",
		url: baseURL+"sendScanStatus.php",
		success: function(response) {
			console.log('Scan Status updated');
		},
		error : function(req, err){
			console.log('Error'+err);
		}
	});
}
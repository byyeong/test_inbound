<div>
    <?php echo form_open('inbound/partner_add');?>
    <div class="form-group">
        <label for="user_name">신청자이름:</label>
        <input type="text" class="form-control" name="user_name" placeholder="신청자 이름을 입력해주세요." value="<?php echo set_value('link');?>">
    </div>
    <?php echo form_error('user_name'); ?>

    <div class="form-group">
        <label for="user_position">부서/직책:</label>
        <input type="text" class="form-control" name="user_position" placeholder="부서/직책을 입력해주세요." value="<?php echo set_value('link');?>">
    </div>
    <?php echo form_error('user_position'); ?>

    <div class="form-group">
        <label for="user_mobile">핸드폰:</label>
        <input type="text" class="form-control" name="user_mobile" placeholder="핸드폰 번호를 입력해주세요." value="<?php echo set_value('link');?>">
    </div>
    <?php echo form_error('user_mobile'); ?>

    <div class="form-group">
        <label for="user_email">이메일:</label>
        <input type="text" class="form-control" name="user_email" placeholder="이메일 주소를 입력해주세요." value="<?php echo set_value('link');?>">
    </div>
    <?php echo form_error('user_email'); ?>

    <div class="form-group">
        <label for="center_name">센터명(상호명):</label>
        <input type="text" class="form-control" name="center_name" placeholder="센터명(상호명)을 입력해주세요." value="<?php echo set_value('link');?>">
    </div>
    <?php echo form_error('center_name'); ?>

    <div class="form-group">
        <label for="center_ceo">대표자이름:</label>
        <input type="text" class="form-control" name="center_ceo" placeholder="대표자 이름을 입력해주세요." value="<?php echo set_value('link');?>">
    </div>
    <?php echo form_error('center_ceo'); ?>

    <div class="form-group">
        <label for="center_addr">위치:</label>
        <input type="text" class="form-control" name="center_addr" placeholder="위치를 입력해주세요." value="<?php echo set_value('link');?>">
    </div>
    <?php echo form_error('center_addr'); ?>

    <div class="form-group">
        <label for="center_tel">전화번호:</label>
        <input type="text" class="form-control" name="center_tel" placeholder="'-'가 포함된 전화번호를 입력해주세요." value="<?php echo set_value('link');?>">
    </div>
    <?php echo form_error('center_tel'); ?>

    <div class="form-group">
        <label for="center_intro">간단소개:</label>
        <input type="text" class="form-control" name="center_intro" placeholder="간단한 소개를 입력해주세요." value="<?php echo set_value('link');?>">
    </div>
    <?php echo form_error('center_intro'); ?>

    <button type="submit" class="btn btn-success">등록</button>
    <?php echo form_close();?>
</div>